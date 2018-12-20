import { differenceBy, intersectionBy } from 'lodash'

export interface BaseField {
  id: string
  [otherField: string]: any
}

export function fieldsToAdd<T extends BaseField>(
  oldIds: BaseField[],
  newIds: BaseField[],
) {
  return differenceBy(newIds, oldIds, 'id') as T[]
}

export function fieldsToRemove<T extends BaseField>(
  oldIds: BaseField[],
  newIds: BaseField[],
): T[] {
  return differenceBy(oldIds, newIds, 'id') as T[]
}

export function fieldsToUpdate<T extends BaseField>(
  oldValues: T[],
  newValues: BaseField[],
): T[] {
  return intersectionBy(newValues, oldValues, v => v.id) as T[]
}

export function fieldsToAddRemove<T extends BaseField, U extends BaseField>(
  oldIds: T[],
  newIds: U[],
): [U[], T[]] {
  return [fieldsToAdd(oldIds, newIds), fieldsToRemove(oldIds, newIds)]
}
