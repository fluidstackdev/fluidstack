import * as _ from 'lodash'
import { prismaObjectType } from 'nexus-prisma'
import * as ProductVariant from '../fragments/ProductVariant'
import { mapRulesToPrismaFilter } from '../utils/rules'
import { optionsFromVariants } from './utils'

export const Collection = prismaObjectType('Collection', t => {
  // TODO: Fix 'rules'
  t.prismaFields(['id', 'name'])

  t.field('products', 'Product', {
    list: true,
    resolve: async (root, args, ctx) => {
      const rules = await ctx.prisma
        .collection({ id: root.id })
        .rules()
        .rules()

      if (rules.length === 0) {
        return ctx.prisma.collection({ id: root.id }).products()
      }

      return ctx.prisma.products({
        where: mapRulesToPrismaFilter(rules),
      })
    },
  })

  t.field('options', 'Option', {
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

  t.field('brands', 'Brand', {
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

  t.field('attributes', 'Attribute', {
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
})
