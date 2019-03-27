import { inputObjectType } from 'yoga';

export const UniqueInput = inputObjectType({
  name: 'UniqueInput',
  definition(t) {
    t.id('id')
  },
})
