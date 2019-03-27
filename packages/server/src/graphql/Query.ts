import { idArg, prismaObjectType } from 'yoga'

/**
 * type Query {
 *   products(...): [Product!]!
 *   options(...): [Option!]!
 *   brands(...): [Brand!]!
 *   collection(...): Collection!
 * }
 */
export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields({
      pick: [
        //{ name: 'productsConnection', alias: 'products', args: ['first', 'last'] },
        { name: 'optionsConnection', alias: 'options' },
        { name: 'brandsConnection', alias: 'brands' },
        { name: 'collectionsConnection', alias: 'collections' },
        { name: 'productsConnection', alias: 'products' },
        { name: 'product' },
      ],
    })

    t.field('collection', {
      type: 'Collection',
      args: {
        collectionId: idArg(),
      },
      resolve: (_root, args, ctx) => {
        return ctx.prisma.collection({ id: args.collectionId })
      },
    })
  },
})
