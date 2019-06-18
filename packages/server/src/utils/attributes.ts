import * as _ from 'lodash'
import { Attribute } from '@generated/photon'

export function transformAttributes(attributes: Attribute[]) {
  return _(attributes)
    .groupBy(a => a.key)
    .toPairs()
    .map(([name, values]) => ({
      name,
      values: values.map(v => ({ id: v.id, value: v.value })),
    }))
    .value()
}
