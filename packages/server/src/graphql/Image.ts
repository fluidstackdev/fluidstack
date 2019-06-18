import { objectType } from '@prisma/nexus'

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.model.id()
    t.model.url()
  },
})
