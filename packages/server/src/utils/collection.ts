import Photon, { CollectionRule, CollectionRuleField } from '@generated/photon'
import { get } from 'lodash'
import { NexusGenInputs } from '../nexus-typegen'
import { core } from '@prisma/nexus'

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
  rule: core.Omit<CollectionRule, 'id'>,
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

export async function fetchAllCollections(
  photon: Photon,
): Promise<
  {
    id: string
    name: string
    rules: { rules: CollectionRule[] } | null
  }[]
> {
  return photon.collections.findMany({
    select: {
      id: true,
      name: true,
      rules: {
        select: {
          rules: {
            select: {
              id: true,
              field: true,
              relation: true,
              value: true,
            },
          },
        },
      },
    },
  })
}

async function fetchAllProducts(photon: Photon): Promise<Product[]> {
  return photon.products.findMany({
    select: {
      id: true,
      name: true,
      type: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
}

export function productMatchRules(
  product: Product,
  rules: core.Omit<CollectionRule, 'id'>[],
) {
  if (!rules) {
    return false
  }
  // FIXME: act as OR (but should only be the case when `applyDisjunctively` is true)
  return rules.some(rule => productMatchRule(product, rule))
}

async function productsMatchRules(
  rules: core.Omit<CollectionRule, 'id'>[],
  photon: Photon,
) {
  const products = await fetchAllProducts(photon)

  return products.filter(p => productMatchRules(p, rules))
}

export async function recomputeCollection(
  collection: CollectionInput,
  prisma: Photon,
) {
  if (!collection.ruleSet) {
    throw new Error('Rule set is empty')
  }

  const products = await productsMatchRules(collection.ruleSet.rules, prisma)

  return prisma.collections.create({
    data: {
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
    },
  })
}

export function createManualCollection(
  collection: CollectionInput,
  photon: Photon,
) {
  return photon.collections.create({
    data: {
      name: collection.name,
      products: {
        connect: collection.productsIds!.map(id => ({ id })),
      },
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
