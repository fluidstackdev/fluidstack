import { inputObjectType } from '@prisma/nexus';

export const UniqueInput = inputObjectType({
  name: 'UniqueInput',
  definition(t) {
    t.id('id')
  },
})
