import {
  objectType,
  extendType,
  arg,
  idArg,
  inputObjectType,
} from '@prisma/nexus'
import { fetchAllCollections, productMatchRules } from '../utils/collection'
import { VariantCreateInput } from '@generated/photon'
import { UniqueInput } from './common'

/**
 * type Product {
 *   id: ID!
 *   name: String!
 *   brand: Brand!
 *   options: [Option!]!
 * }
 */
export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.brand()
    t.model.thumbnail()
    t.model.name()
    t.model.variants()
    t.model.slug()
    t.model.attributes({ pagination: false })

    // t.field('attributes', {
    //   ...t.prismaType.attributes,
    //   args: {},
    //   nullable: false,
    // })
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
    t.crud.createOneProduct()

    t.field('productCreate', {
      type: 'Product',
      args: {
        data: arg({ type: CreateProductInput }),
      },
      resolve: async (_parent, { data }, ctx) => {
        const collections = await fetchAllCollections(ctx.photon)
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

        return ctx.photon.products.create({
          data: {
            name: data.name,
            slug: '',
            description: '',
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
          },
        })
      },
    })

    t.field('productDelete', {
      type: 'Product',
      args: {
        productId: idArg(),
      },
      resolve: async (_root, args, ctx) => {
        return ctx.photon.products.delete({ where: { id: args.productId } })
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
