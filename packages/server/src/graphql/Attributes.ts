import { objectType } from 'yoga'

export const AttributePayload = objectType({
  name: 'AttributePayload',
  definition(t) {
    t.string('name')
    t.list.field('values', { type: AttributeValue })
  },
})

export const AttributeValue = objectType({
  name: 'AttributeValue',
  definition(t) {
    t.id('id')
    t.string('value')
  },
})
