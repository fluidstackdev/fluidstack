import { objectType } from '@prisma/nexus'

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

export const Attribute = objectType({
  name: 'Attribute',
  definition(t) {
    t.model.id()
    t.model.key()
    t.model.products()
    t.model.value()
  },
})
