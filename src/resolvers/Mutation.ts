import { arg, idArg, inputObjectType } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { VariantCreateInput } from '../generated/prisma-client'

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

export const Mutation = prismaObjectType('Mutation', t => {
  t.field('addProductsToCollection', 'Collection', {
    args: {
      productIds: idArg({ list: true }),
      collectionId: idArg(),
    },
    resolve: async (_, args, ctx) => {
      const collection = await ctx.prisma.updateCollection({
        where: { id: args.collectionId },
        data: { products: { connect: args.productIds.map(id => ({ id })) } },
      })

      return collection
    },
  })

  t.field('removeProductsFromCollection', 'Collection', {
    args: {
      productIds: idArg({ list: true }),
      collectionId: idArg(),
    },
    resolve: async (_, args, ctx) => {
      const collection = await ctx.prisma.updateCollection({
        where: { id: args.collectionId },
        data: { products: { disconnect: args.productIds.map(id => ({ id })) } },
      })

      return collection
    },
  })

  t.field('createProduct', 'Product', {
    args: {
      data: arg('CreateProductInput'),
    },
    resolve: async (parent, { data }, ctx) => {
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
      })
    },
  })

  t.field('updateProduct', 'Product', {
    args: {
      data: arg('UpdateProductInput'),
    },
    resolve: async () => {
      throw new Error('updateProduct resolve not implemented yet')
    },
  })
})
