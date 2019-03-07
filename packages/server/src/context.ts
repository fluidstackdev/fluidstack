import { Prisma, prisma } from '../.yoga/prisma-client'

export interface Context {
  prisma: Prisma
}

export default ({ req }) => ({ prisma, req })
