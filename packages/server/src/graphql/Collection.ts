import * as _ from 'lodash'
import { prismaObjectType } from 'yoga'
import * as ProductVariant from '../fragments/ProductVariant'
import { optionsFromVariants } from './utils'

export const Collection = prismaObjectType({
  name: 'Collection',
  definition(t) {
    // TODO: Fix 'rules'
    t.prismaFields(['id', 'name', { name: 'products', args: false }])

    t.field('options', {
      type: 'Option',
      list: true,
      resolve: async (root, args, ctx) => {
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
      resolve: (parent, args, ctx) => {
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
      type: 'Attribute',
      list: true,
      resolve: (parent, args, ctx) => {
        return ctx.prisma.attributes({
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
  },
})
