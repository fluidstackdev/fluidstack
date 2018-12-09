import { GraphQLServer } from 'graphql-yoga'
import { Context } from './context'
import { prisma } from './generated/prisma-client'
import { schema } from './schema'

const server = new GraphQLServer({
  schema,
  context: {
    prisma,
  } as Context,
})

const port = 4000

server.start({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}/`),
)
