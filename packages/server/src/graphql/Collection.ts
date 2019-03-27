import * as _ from 'lodash'
import {
  arg,
  extendType,
  idArg,
  inputObjectType,
  prismaObjectType,
  intArg,
} from 'yoga'
import * as ProductVariant from '../fragments/ProductVariant'
import {
  createManualCollection,
  recomputeCollection,
  throwIfManualAndAutomatic,
  throwIfMissingCollectionInput,
} from '../utils/collection'
import { optionsFromVariants } from './utils'
import { ProductWhereInput } from '../../.yoga/prisma-client'
import { transformAttributes } from '../utils/attributes'
import { AttributePayload } from './Attributes'

export const Collection = prismaObjectType({
  name: 'Collection',
  definition(t) {
    // TODO: Fix 'rules'
    t.prismaFields(['id', 'name'])

    t.field('products', {
      type: 'ProductConnection',
      args: {
        optionsValuesIds: idArg({ list: true, required: false }),
        brandsIds: idArg({ list: true, required: false }),
        attributesIds: idArg({ list: true, required: false }),
        first: intArg({ required: false }),
        last: intArg({ required: false }),
      },
      resolve(root, args, ctx) {
        const where: ProductWhereInput = {
          collections_some: {
            id: root.id,
          },
        }

        if (args.brandsIds && args.brandsIds.length > 0) {
          where.brand = { id_in: args.brandsIds }
        }

        if (args.attributesIds && args.attributesIds.length > 0) {
          where.attributes_some = { id_in: args.attributesIds }
        }

        if (args.optionsValuesIds && args.optionsValuesIds.length > 0) {
          where.variants_some = {
            optionValues_some: {
              id_in: args.optionsValuesIds,
            },
          }
        }

        return ctx.prisma.productsConnection({ where })
      },
    })

    t.field('options', {
      type: 'Option',
      list: true,
      resolve: async (root, _args, ctx) => {
        const products = await ctx.prisma
          .collection({ id: root.id })
          .products()
          .$fragment<ProductVariant.Type[]>(ProductVariant.fragment)

        const variants = _.flatMap(products, p => p.variants)

        return optionsFromVariants(variants)
      },
    })

    t.field('brands', {
      type: 'Brand',
      list: true,
      resolve: (parent, _args, ctx) => {
        return ctx.prisma.brands({
          where: {
            products_some: {
              collections_some: {
                id: parent.id,
              },
            },
          },
        })
      },
    })

    t.field('attributes', {
      type: AttributePayload,
      list: true,
      resolve: async (parent, _args, ctx) => {
        const attributes = await ctx.prisma.attributes({
          where: {
            products_some: {
              collections_some: {
                id: parent.id,
              },
            },
          },
        })

        return transformAttributes(attributes)
      },
    })
  },
})

export const CollectionInput = inputObjectType({
  name: 'CollectionInput',
  definition(t) {
    t.string('name')
    t.field('ruleSet', {
      type: 'CollectionRuleSetInput',
      required: false,
    })
    t.string('productsIds', { list: true, required: false })
  },
})

export const CollectionRuleSetInput = inputObjectType({
  name: 'CollectionRuleSetInput',
  definition(t) {
    t.boolean('applyDisjunctively')
    t.field('rules', {
      type: 'RulesInput',
      list: true,
    })
  },
})

export const RulesInput = inputObjectType({
  name: 'RulesInput',
  definition(t) {
    t.field('field', { type: 'CollectionRuleField' })
    t.field('relation', { type: 'CollectionRuleRelation' })
    t.string('value')
  },
})

export const CollectionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('collectionCreate', {
      type: 'Collection',
      args: {
        collection: arg({ type: CollectionInput }),
      },
      resolve: async (_root, { collection }, ctx) => {
        throwIfMissingCollectionInput(collection)
        throwIfManualAndAutomatic(collection)

        if (collection.ruleSet && collection.ruleSet.rules.length > 0) {
          return recomputeCollection(collection, ctx.prisma)
        } else {
          return createManualCollection(collection, ctx.prisma)
        }
      },
    })

    t.field('collectionAddProducts', {
      type: 'Collection',
      args: {
        productIds: idArg({ list: true }),
        collectionId: idArg(),
      },
      resolve: async (_, args, ctx) => {
        const collectionRules = await ctx.prisma
          .collection({ id: args.collectionId })
          .rules()
          .rules()

        if (collectionRules.length > 0) {
          throw new Error('Cannot add products to an automatic collection')
        }

        const collection = await ctx.prisma.updateCollection({
          where: { id: args.collectionId },
          data: {
            products: { connect: args.productIds.map(id => ({ id })) },
          },
        })

        return collection
      },
    })

    t.field('collectionRemoveProducts', {
      type: 'Collection',
      args: {
        productIds: idArg({ list: true }),
        collectionId: idArg(),
      },
      resolve: async (_, args, ctx) => {
        const collectionRules = await ctx.prisma
          .collection({ id: args.collectionId })
          .rules()
          .rules()

        if (collectionRules.length > 0) {
          throw new Error('Cannot remove products from an automatic collection')
        }

        const collection = await ctx.prisma.updateCollection({
          where: { id: args.collectionId },
          data: {
            products: { disconnect: args.productIds.map(id => ({ id })) },
          },
        })

        return collection
      },
    })

    t.field('collectionUpdate', {
      type: 'Collection',
      args: {
        id: idArg(),
        collection: arg({ type: CollectionInput }),
      },
      resolve: async (_root, { id, collection }, ctx) => {
        throwIfMissingCollectionInput(collection)
        throwIfManualAndAutomatic(collection)

        let outputCollection = null

        if (collection.ruleSet && collection.ruleSet.rules.length > 0) {
          outputCollection = await recomputeCollection(collection, ctx.prisma)
        }

        if (collection.productsIds && collection.productsIds.length > 0) {
          outputCollection = await createManualCollection(
            collection,
            ctx.prisma,
          )
        }

        await ctx.prisma.deleteCollection({ id })

        return outputCollection!
      },
    })
  },
})
