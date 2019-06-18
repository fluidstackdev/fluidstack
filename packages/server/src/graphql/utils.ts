import * as _ from 'lodash'
import { Option } from '@generated/photon'

interface Variant {
  optionValues: { option: Option }[]
}

export function optionsFromVariants(variants: Variant[]): Option[] {
  return _(variants)
    .flatMap(v => v.optionValues)
    .map(v => v.option)
    .uniqBy(v => v.id)
    .value()
}
