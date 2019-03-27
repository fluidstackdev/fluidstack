import { Prisma, prisma } from '../.yoga/prisma-client'

export interface Context {
  prisma: Prisma
}

export default (ctx: any) => ({ prisma, req: ctx.req })
