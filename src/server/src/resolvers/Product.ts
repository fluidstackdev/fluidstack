import { prismaObjectType } from 'nexus-prisma'
import * as ProductVariant from '../fragments'
import { optionsFromVariants } from './utils'

/**
 * type Product {
 *   id: ID!
 *   name: String!
 *   brand: Brand!
 *   options: [Option!]!
 * }
 */
export const Product = prismaObjectType('Product', t => {
  t.prismaFields(['id', 'name', 'type', 'brand', 'variants'])

  t.field('options', 'Option', {
    list: true,
    resolve: async (parent, _, ctx) => {
      const { variants } = await ctx.prisma
        .product({ id: parent.id })
        .$fragment<ProductVariant.Type>(ProductVariant.fragment)

      return optionsFromVariants(variants)
    },
  })
})
