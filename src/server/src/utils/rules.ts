import {
  CollectionRule,
  CollectionRuleField,
  CollectionRuleRelation,
  ProductWhereInput,
} from '../generated/prisma-client'

function isScalarRelation(field: CollectionRuleField): boolean {
  return field === 'TITLE' || field === 'PRICE'
}

function relationFieldName(field: CollectionRuleField): string {
  if (field === 'TYPE') {
    return 'name'
  }

  throw new Error(`field ${field} is scalar and not relational`)
}
function ruleFieldToPrisma(field: CollectionRuleField): string {
  switch (field) {
    case 'TITLE':
      return 'name'
    case 'TYPE':
      return 'type'
    default:
      throw new Error('Field not implemented yet')
  }
}

function ruleToFilterName(
  field: CollectionRuleField,
  relation: CollectionRuleRelation,
): string {
  const fieldName = ruleFieldToPrisma(field)

  switch (relation) {
    case 'CONTAINS':
      return `${fieldName}_contains`
    case 'NOT_CONTAINS':
      return `${fieldName}_not_contains`
    case 'ENDS_WITH':
      return `${fieldName}_ends_with`
    case 'GREATER_THAN':
      return `${fieldName}_gt`
    case 'LESS_THAN':
      return `${fieldName}_lt`
    case 'STARTS_WITH':
      return `${fieldName}_starts_with`
    case 'NOT_EQUALS':
      return `${fieldName}_not`
    case 'EQUALS':
      return fieldName
  }
}

function ruleToFilter(rule: CollectionRule) {
  const filterName = ruleToFilterName(rule.field, rule.relation)

  if (isScalarRelation(rule.field)) {
    return {
      [filterName]: rule.value,
    }
  }

  return {
    [relationFieldName(rule.field)]: {
      [filterName]: rule.value,
    },
  }
}

export function mapRulesToPrismaFilter(
  rules: CollectionRule[],
): ProductWhereInput {
  return rules.reduce<ProductWhereInput>((acc, rule) => {
    acc = {
      ...acc,
      ...ruleToFilter(rule),
    }
    return acc
  }, {})
}
