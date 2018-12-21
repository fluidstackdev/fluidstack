import { idArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

/**
 * type Query {
 *   products(...): [Product!]!
 *   options(...): [Option!]!
 *   brands(...): [Brand!]!
 *   collection(...): Collection!
 * }
 */
export const Query = prismaObjectType('Query', t => {
  t.prismaFields({
    pick: [
      { name: 'productsConnection', alias: 'products' },
      { name: 'optionsConnection', alias: 'options' },
      { name: 'brandsConnection', alias: 'brands' },
      { name: 'collectionsConnection', alias: 'collections' },
    ],
  })

  t.field('collection', 'Collection', {
    args: {
      collectionId: idArg(),
    },
    resolve: (root, args, ctx) => {
      return ctx.prisma.collection({ id: args.collectionId })
    },
  })
})
