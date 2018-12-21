import { arg, idArg, inputObjectType, stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { VariantCreateInput } from '../generated/prisma-client'
import {
  fetchAllCollections,
  shouldBeInCollection,
  recomputeCollection,
  throwIfManualAndAutomatic,
  createManualCollection,
  throwIfMissingCollectionInput,
} from '../utils/collection'

export const UniqueInput = inputObjectType('UniqueInput', t => {
  t.id('id')
})

export const CreateVariantInput = inputObjectType('CreateVariantInput', t => {
  t.boolean('availableForSale')
  t.int('price')
  t.field('optionsValueIds', 'UniqueInput', { list: true })
})

export const CreateProductInput = inputObjectType('CreateProductInput', t => {
  t.string('name')
  t.field('brand', 'UniqueInput')
  t.field('attributesIds', 'UniqueInput', { list: true })
  t.field('variants', 'CreateVariantInput', { list: true })
})

export const UpdateVariantInput = inputObjectType('UpdateVariantInput', t => {
  t.id('id')
  t.boolean('availableForSale')
  t.int('price')
  t.field('optionsValueIds', 'UniqueInput', { list: true })
})

export const UpdateProductInput = inputObjectType('UpdateProductInput', t => {
  t.id('id')
  t.string('name')
  t.field('brand', 'UniqueInput')
  t.field('attributesIds', 'UniqueInput', { list: true })
  t.field('variants', 'UpdateVariantInput', { list: true })
})

export const CollectionInput = inputObjectType('CollectionInput', t => {
  t.string('name')
  t.field('ruleSet', 'CollectionRuleSetInput', { required: false })
  t.string('productsIds', { list: true, required: false })
})

export const CollectionRuleSetInput = inputObjectType(
  'CollectionRuleSetInput',
  t => {
    t.boolean('applyDisjunctively')
    t.field('rules', 'RulesInput', { list: true })
  },
)

export const RulesInput = inputObjectType('RulesInput', t => {
  t.field('field', 'CollectionRuleField')
  t.field('relation', 'CollectionRuleRelation')
  t.string('value')
})

export const Mutation = prismaObjectType('Mutation', t => {
  t.field('collectionCreate', 'Collection', {
    args: {
      collection: arg('CollectionInput'),
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

  t.field('collectionAddProducts', 'Collection', {
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

  t.field('collectionRemoveProducts', 'Collection', {
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
        data: { products: { disconnect: args.productIds.map(id => ({ id })) } },
      })

      return collection
    },
  })

  t.field('collectionUpdate', 'Collection', {
    args: {
      id: idArg(),
      collection: arg('CollectionInput'),
    },
    resolve: async (root, { id, collection }, ctx) => {
      throwIfMissingCollectionInput(collection)
      throwIfManualAndAutomatic(collection)

      let outputCollection = null

      if (collection.ruleSet && collection.ruleSet.rules.length > 0) {
        outputCollection = await recomputeCollection(collection, ctx.prisma)
      }

      if (collection.productsIds && collection.productsIds.length > 0) {
        outputCollection = await createManualCollection(collection, ctx.prisma)
      }

      await ctx.prisma.deleteCollection({ id })

      return outputCollection!
    },
  })

  t.field('productCreate', 'Product', {
    args: {
      data: arg('CreateProductInput'),
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

  t.field('productDelete', 'Product', {
    args: {
      productId: idArg(),
    },
    resolve: async (root, args, ctx) => {
      return ctx.prisma.deleteProduct({ id: args.productId })
    },
  })

  t.field('productUpdate', 'Product', {
    args: {
      data: arg('UpdateProductInput'),
    },
    resolve: async () => {
      throw new Error('updateProduct resolve not implemented yet')
    },
  })
})
