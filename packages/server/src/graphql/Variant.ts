import { objectType } from '@prisma/nexus'

export const Variant = objectType({
  name: 'Variant',
  definition(t) {
    t.model.id()
    t.model.availableForSale()
    t.model.images()
    t.model.optionValues()
    t.model.price()
    t.model.product()
    t.model.sku()
  },
})
