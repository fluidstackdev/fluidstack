import { objectType } from '@prisma/nexus'

export const OptionValue = objectType({
  name: 'OptionValue',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.option()
    t.model.variant()
  },
})
