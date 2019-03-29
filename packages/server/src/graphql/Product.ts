import { prismaObjectType, extendType, arg, idArg, inputObjectType } from 'yoga'
import { fetchAllCollections, productMatchRules } from '../utils/collection'
import { VariantCreateInput } from '../../.yoga/prisma-client'
import { UniqueInput } from './common'

/**
 * type Product {
 *   id: ID!
 *   name: String!
 *   brand: Brand!
 *   options: [Option!]!
 * }
 */
export const Product = prismaObjectType({
  name: 'Product',
  definition(t) {
    t.prismaFields({ filter: ['collections', 'attributes'] })

    t.field('attributes', {
      ...t.prismaType.attributes,
      args: {},
      nullable: false,
    })
  },
})

export const CreateVariantInput = inputObjectType({
  name: 'CreateVariantInput',
  definition(t) {
    t.boolean('availableForSale')
    t.int('price')
    t.field('optionsValueIds', {
      type: UniqueInput,
      list: true,
    })
  },
})

export const CreateProductInput = inputObjectType({
  name: 'CreateProductInput',
  definition(t) {
    t.string('name')
    t.string('slug')
    t.field('brand', { type: UniqueInput })
    t.field('attributesIds', { type: UniqueInput, list: true })
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
      type: UniqueInput,
      list: true,
    })
  },
})

export const UpdateProductInput = inputObjectType({
  name: 'UpdateProductInput',
  definition(t) {
    t.id('id')
    t.string('name')
    t.field('brand', { type: UniqueInput })
    t.field('attributesIds', { type: UniqueInput, list: true })
    t.field('variants', { type: 'UpdateVariantInput', list: true })
  },
})

export const ProductMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('productCreate', {
      type: 'Product',
      args: {
        data: arg({ type: CreateProductInput }),
      },
      resolve: async (_parent, { data }, ctx) => {
        const collections = await fetchAllCollections(ctx.prisma)
        const collectionsToConnect = collections
          .filter(
            c =>
              c.rules &&
              productMatchRules(
                { id: '', name: data.name, type: { id: '', name: 'SHOES' } },
                c.rules.rules,
              ),
          )
          .map(c => ({ id: c.id }))

        return ctx.prisma.createProduct({
          name: data.name,
          brand: { connect: { id: data.brand.id } },
          description: '',
          slug: '',
          attributes: {
            connect: data.attributesIds,
          },
          thumbnail: { create: { url: '' } },
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
      resolve: async (_root, args, ctx) => {
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
