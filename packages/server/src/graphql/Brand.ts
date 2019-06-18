import { objectType } from '@prisma/nexus'

export const Brand = objectType({
  name: 'Brand',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.products()
  },
})
