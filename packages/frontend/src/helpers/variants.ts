import _ from 'lodash'
import {
  ICollectionProductFragment,
  IOptionValue,
  IVariant,
} from '../generated-types'

export type OptionValueWithColor = IOptionValue & { isColor: boolean }

export function getDisplayPrice(product: ICollectionProductFragment) {
  const variant = _.minBy(product.variants, v => v.price)

  return (variant && variant.price) || 1180
}

export function sameOptionValue(
  a: IOptionValue | null,
  b: IOptionValue | null
) {
  if (!a || !b) {
    return false
  }

  return a.id === b.id
}

export function getAvailableOptionValues(
  optionValues: IOptionValue[],
  variants: ReadonlyArray<IVariant>
) {
  const output: IOptionValue[] = []

  variants.forEach(variant => {
    const optionsValuesAreInVariant = variant.optionValues!.find(o =>
      optionValues.every(inputOptionValue =>
        sameOptionValue(o, inputOptionValue)
      )
    )

    if (optionsValuesAreInVariant) {
      output.push(...variant.optionValues!.flatMap(o => o))
    }
  })

  return _.uniqBy(output, o => o.id)
}

export function getIterableVariants(variants: ReadonlyArray<IVariant>) {
  let output: Record<string, OptionValueWithColor[]> = {}

  variants.forEach(variant => {
    variant.optionValues!.forEach(v => {
      const identifier = v.option.name

      if (!output[identifier]) {
        output[identifier] = []
      }

      if (!output[identifier].find(value => value.id === v.id)) {
        output[identifier].push({
          ...v,
          isColor: v.option.isColor ? true : false,
        })
      }
    })
  })

  return _.orderBy(Object.entries(output), ([optionName]) => optionName)
}

export function isOptionValueAvailable(
  optionValue: IOptionValue,
  selectedOptionValues: IOptionValue[],
  availableOptionValues: IOptionValue[] | null
) {
  if (!availableOptionValues || selectedOptionValues.length === 0) {
    return true
  }

  if (selectedOptionValues.find(s => s.id === optionValue.id)) {
    return true
  }

  return (
    availableOptionValues.find(o => sameOptionValue(o, optionValue)) !==
    undefined
  )
}
