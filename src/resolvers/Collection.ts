import * as _ from 'lodash'
import { prismaObjectType } from 'nexus-prisma'
import * as ProductVariant from '../fragments/ProductVariant'
import { optionsFromVariants } from './utils'
import {
  CollectionRule,
  ProductWhereInput,
  CollectionRuleRelation,
  CollectionRuleField,
} from '../generated/prisma-client'

function ruleFieldToPrisma(field: CollectionRuleField): string {
  switch (field) {
    case 'TITLE':
      return 'name'
    default:
      throw new Error('Field not implemented yet')
  }
}

function ruleRelationToPrisma(relation: CollectionRuleRelation): string {
  switch (relation) {
    case 'CONTAINS':
      return '_contains'
    case 'NOT_CONTAINS':
      return '_not_contains'
    case 'ENDS_WITH':
      return '_ends_with'
    case 'GREATER_THAN':
      return '_gt'
    case 'LESS_THAN':
      return '_lt'
    case 'STARTS_WITH':
      return '_starts_with'
    case 'NOT_EQUALS':
      return '_not'
    case 'EQUALS':
      return ''
  }
}

function mapRulesToPrismaFilter(rules: CollectionRule[]): ProductWhereInput {
  return rules.reduce<ProductWhereInput>((acc, rule) => {
    acc = {
      ...acc,
      [`${ruleFieldToPrisma(rule.field)}${ruleRelationToPrisma(
        rule.relation,
      )}`]: rule.value,
    }
    return acc
  }, {})
}

export const Collection = prismaObjectType('Collection', t => {
  // TODO: Fix 'rules'
  t.prismaFields(['id', 'name', 'rules'])

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
