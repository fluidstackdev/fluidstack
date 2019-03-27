import {
  CollectionRule,
  CollectionRuleField,
  Prisma,
} from '../../.yoga/prisma-client'
import { get } from 'lodash'
import { NexusGenInputs } from '../../.yoga/nexus'

interface Product {
  id: string
  name: string
  type: { id: string; name: string }
}

type CollectionInput = NexusGenInputs['CollectionInput']

function fieldPath(field: CollectionRuleField): string {
  switch (field) {
    case 'TITLE':
      return 'name'
    case 'TYPE':
      return 'type.name'
    default:
      throw new Error('Field not implemented yet')
  }
}

export function productMatchRule(
  product: Product,
  rule: CollectionRule,
): boolean {
  const { field, relation, value } = rule
  const productField: string = get(product, fieldPath(field)).toString()

  switch (relation) {
    case 'CONTAINS':
      return productField.includes(value)
    case 'NOT_CONTAINS':
      return !productField.includes(value)
    case 'STARTS_WITH':
      return productField.startsWith(value)
    case 'ENDS_WITH':
      return productField.endsWith(value)
    case 'GREATER_THAN':
      return productField > value
    case 'LESS_THAN':
      return productField < value
    case 'EQUALS':
      return productField === value
    case 'NOT_EQUALS':
      return productField !== value
  }
}

export function fetchAllCollections(
  prisma: Prisma,
): Promise<
  {
    id: string
    name: string
    rules: { rules: CollectionRule[] } | null
  }[]
> {
  return prisma.collections().$fragment(`fragment Collections on Collection {
    id
    name
    rules {
      rules {
        field
        relation
        value
      }
    }
  }`)
}

function fetchAllProducts(prisma: Prisma): Promise<Product[]> {
  return prisma.products().$fragment(`fragment product on Product {
    id
    name
    type { id name }
  }`)
}

export function productMatchRules(product: Product, rules: CollectionRule[]) {
  if (!rules) {
    return false
  }
  // FIXME: act as OR (but should only be the case when `applyDisjunctively` is true)
  return rules.some(rule => productMatchRule(product, rule))
}

async function productsMatchRules(rules: CollectionRule[], prisma: Prisma) {
  const products = await fetchAllProducts(prisma)

  return products.filter(p => productMatchRules(p, rules))
}

export async function recomputeCollection(
  collection: CollectionInput,
  prisma: Prisma,
) {
  if (!collection.ruleSet) {
    throw new Error('Rule set is empty')
  }

  const products = await productsMatchRules(collection.ruleSet.rules, prisma)

  return prisma.createCollection({
    name: collection.name,
    rules: {
      create: {
        appliesDisjunctively: collection.ruleSet.applyDisjunctively,
        rules: {
          create: collection.ruleSet.rules,
        },
      },
    },
    products: {
      connect: products.map(p => ({ id: p.id })),
    },
  })
}

export function createManualCollection(
  collection: CollectionInput,
  prisma: Prisma,
) {
  return prisma.createCollection({
    name: collection.name,
    products: {
      connect: collection.productsIds!.map(id => ({ id })),
    },
  })
}

export function throwIfManualAndAutomatic(collection: CollectionInput): void {
  if (
    collection.productsIds &&
    collection.productsIds.length > 0 &&
    collection.ruleSet &&
    collection.ruleSet.rules.length > 0
  ) {
    throw new Error('Collection can either be manual or automatic')
  }
}

export function throwIfMissingCollectionInput(collection: CollectionInput) {
  if (
    (!collection.ruleSet || collection.ruleSet.rules.length === 0) &&
    (!collection.productsIds || collection.productsIds.length === 0)
  ) {
    throw new Error(
      'Missing params: you need to fill either ruleSet or productIds param',
    )
  }
}
