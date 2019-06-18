import { objectType } from '@prisma/nexus'

export const Option = objectType({
  name: 'Option',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.values()
    t.model.isColor()
  },
})
