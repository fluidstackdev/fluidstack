import { idArg, objectType } from '@prisma/nexus'

/**
 * type Query {
 *   products(...): [Product!]!
 *   options(...): [Option!]!
 *   brands(...): [Brand!]!
 *   collection(...): Collection!
 * }
 */
export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.findManyVariant({ filtering: true })
    t.crud.findOneVariant()
    t.crud.findManyProduct({ alias: 'products' })
    t.crud.findOneProduct({ alias: 'product' })
    t.crud.findManyOption({ alias: 'options' })
    t.crud.findManyBrand({ alias: 'brands' })
    t.crud.findManyCollection({ alias: 'collections' })

    t.field('collection', {
      type: 'Collection',
      args: {
        collectionId: idArg(),
      },
      resolve: (_root, args, ctx) => {
        return ctx.photon.collections.findOne({
          where: { id: args.collectionId },
        })
      },
    })
  },
})
