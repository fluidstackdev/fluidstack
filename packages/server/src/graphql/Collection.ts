import * as _ from 'lodash'
import {
  arg,
  extendType,
  idArg,
  inputObjectType,
  objectType,
  intArg,
} from '@prisma/nexus'
import {
  createManualCollection,
  recomputeCollection,
  throwIfManualAndAutomatic,
  throwIfMissingCollectionInput,
} from '../utils/collection'
import { optionsFromVariants } from './utils'
import { ProductWhereInput } from '@generated/photon'
import { transformAttributes } from '../utils/attributes'
import { AttributePayload } from './Attributes'

export const Collection = objectType({
  name: 'Collection',
  definition(t) {
    // TODO: Fix 'rules'
    t.model.id()
    t.model.name()

    t.list.field('products', {
      type: 'Product',
      args: {
        optionsValuesIds: idArg({ list: true, required: false }),
        brandsIds: idArg({ list: true, required: false }),
        attributesIds: idArg({ list: true, required: false }),
        first: intArg({ required: false }),
        last: intArg({ required: false }),
      },
      resolve(root, args, ctx) {
        const where: ProductWhereInput = {
          collections: {
            some: { id: root.id },
          },
        }

        if (args.brandsIds && args.brandsIds.length > 0) {
          where.brand = { id: { in: args.brandsIds } }
        }

        if (args.attributesIds && args.attributesIds.length > 0) {
          where.attributes = { some: { id: { in: args.attributesIds } } }
        }

        if (args.optionsValuesIds && args.optionsValuesIds.length > 0) {
          where.variants = {
            some: {
              optionValues: {
                some: {
                  id: { in: args.optionsValuesIds },
                },
              },
            },
          }
        }

        return ctx.photon.products.findMany({ where })
      },
    })

    t.field('options', {
      type: 'Option',
      list: true,
      resolve: async (root, _args, ctx) => {
        const { products } = await ctx.photon.collections.findOne({
          where: { id: root.id },
          select: {
            products: {
              select: {
                variants: {
                  select: {
                    optionValues: {
                      select: {
                        option: {
                          select: {
                            id: true,
                            name: true,
                            isColor: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        })

        /**
         * { products { variants { optionsValues { options {  } } } } }
         */

        const variants = _.flatMap(products, p => p.variants)

        return optionsFromVariants(variants)
      },
    })

    t.field('brands', {
      type: 'Brand',
      list: true,
      resolve: (parent, _args, ctx) => {
        return ctx.photon.brands.findMany({
          where: {
            products: {
              some: {
                collections: {
                  some: {
                    id: parent.id,
                  },
                },
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
        const attributes = await ctx.photon.attributes.findMany({
          where: {
            products: {
              some: {
                collections: {
                  some: {
                    id: parent.id,
                  },
                },
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
          return recomputeCollection(collection, ctx.photon)
        } else {
          return createManualCollection(collection, ctx.photon)
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
        const collectionRules = await ctx.photon.collections
          .findOne({ where: { id: args.collectionId } })
          .rules()
          .rules()

        if (collectionRules.length > 0) {
          throw new Error('Cannot add products to an automatic collection')
        }

        const collection = await ctx.photon.collections.update({
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
        const collectionRules = await ctx.photon.collections
          .findOne({ where: { id: args.collectionId } })
          .rules()
          .rules()

        if (collectionRules.length > 0) {
          throw new Error('Cannot remove products from an automatic collection')
        }

        const collection = await ctx.photon.collections.update({
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
          outputCollection = await recomputeCollection(collection, ctx.photon)
        }

        if (collection.productsIds && collection.productsIds.length > 0) {
          outputCollection = await createManualCollection(
            collection,
            ctx.photon,
          )
        }

        await ctx.photon.collections.delete({ where: { id } })

        return outputCollection!
      },
    })
  },
})
