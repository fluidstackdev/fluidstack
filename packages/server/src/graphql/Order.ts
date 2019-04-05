import { prismaExtendType, idArg } from "yoga";

export const OrderMutations = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    t.field('addToCart', {
      type: 'Boolean',
      args: {
        variantId: idArg()
      },
      async resolve(root, args, ctx) {
        try {
          await ctx.prisma.updateUser({
            where: { id: '' },
            data: {
              cart: {
                connect: { id: args.variantId }
              }
            }
          })

          return true
        } catch(e) {
          return false
        }
      }
    })

    t.field('removeFromCart', {
      type: 'Boolean',
      args: {
        variantId: idArg()
      },
      async resolve(root, args, ctx) {
        try {
          await ctx.prisma.updateUser({
            where: { id: '' },
            data: {
              cart: {
                disconnect: { id: args.variantId }
              }
            }
          })

          return true
        } catch (e) {
          return false
        }
      }
    })
  }
})