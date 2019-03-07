import { arg, idArg, inputObjectType, prismaObjectType } from 'yoga'
import { VariantCreateInput } from '../../.yoga/prisma-client'
import {
  createManualCollection,
  fetchAllCollections,
  recomputeCollection,
  shouldBeInCollection,
  throwIfManualAndAutomatic,
  throwIfMissingCollectionInput,
} from '../utils/collection'

export const UniqueInput = inputObjectType({
  name: 'UniqueInput',
  definition(t) {
    t.id('id')
  },
})

export const CreateVariantInput = inputObjectType({
  name: 'CreateVariantInput',
  definition(t) {
    t.boolean('availableForSale')
    t.int('price')
    t.field('optionsValueIds', {
      type: 'UniqueInput',
      list: true,
    })
  },
})

export const CreateProductInput = inputObjectType({
  name: 'CreateProductInput',
  definition(t) {
    t.string('name')
    t.field('brand', { type: 'UniqueInput' })
    t.field('attributesIds', { type: 'UniqueInput', list: true })
    t.field('variants', { type: 'CreateVariantInput', list: true })
  },
})

export const UpdateVariantInput = inputObjectType({
  name: 'UpdateVariantInput',
  definition(t) {
    t.id('id')
    t.boolean('availableForSale')
    t.int('price')
    t.field('optionsValueIds', {
      type: 'UniqueInput',
      list: true,
    })
  },
})

export const UpdateProductInput = inputObjectType({
  name: 'UpdateProductInput',
  definition(t) {
    t.id('id')
    t.string('name')
    t.field('brand', { type: 'UniqueInput' })
    t.field('attributesIds', { type: 'UniqueInput', list: true })
    t.field('variants', { type: 'UpdateVariantInput', list: true })
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

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.field('collectionCreate', {
      type: 'Collection',
      args: {
        collection: arg({ type: 'CollectionInput' }),
      },
      resolve: async (root, { collection }, ctx) => {
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
        collection: arg({ type: 'CollectionInput' }),
      },
      resolve: async (root, { id, collection }, ctx) => {
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

    t.field('productCreate', {
      type: 'Product',
      args: {
        data: arg({ type: 'CreateProductInput' }),
      },
      resolve: async (parent, { data }, ctx) => {
        const collections = await fetchAllCollections(ctx.prisma)
        const collectionsToConnect = collections
          .filter(
            c =>
              c.rules &&
              shouldBeInCollection(
                { id: '', name: data.name, type: { id: '', name: 'SHOES' } },
                c.rules.rules,
              ),
          )
          .map(c => ({ id: c.id }))

        return ctx.prisma.createProduct({
          name: data.name,
          brand: { connect: { id: data.brand.id } },
          attributes: {
            connect: data.attributesIds,
          },
          variants: {
            create: data.variants.map(
              variant =>
                ({
                  optionValues: {
                    connect: variant.optionsValueIds,
                  },
                } as VariantCreateInput),
            ),
          },
          collections: { connect: collectionsToConnect },
        })
      },
    })

    t.field('productDelete', {
      type: 'Product',
      args: {
        productId: idArg(),
      },
      resolve: async (root, args, ctx) => {
        return ctx.prisma.deleteProduct({ id: args.productId })
      },
    })

    t.field('productUpdate', {
      type: 'Product',
      args: {
        data: arg({ type: 'UpdateProductInput' }),
      },
      resolve: async () => {
        throw new Error('updateProduct resolve not implemented yet')
      },
    })
  },
})
