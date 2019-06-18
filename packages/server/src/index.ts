import { ApolloServer } from 'apollo-server'
import { makeSchema } from '@prisma/nexus'
import { join } from 'path'
import { nexusPrismaMethod } from '@generated/nexus-prisma'
import Photon from '@generated/photon'
import { Context } from './context'
import * as allTypes from './graphql'

const photon = new Photon({ debug: true })

const nexusPrisma = nexusPrismaMethod({
  photon: (ctx: Context) => ctx.photon,
})

const schema = makeSchema({
  types: [allTypes, nexusPrisma],
  outputs: {
    typegen: join(__dirname, 'nexus-typegen.ts'),
    schema: join(__dirname, 'schema.graphql'),
  },
  nonNullDefaults: {
    input: true,
    output: true,
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon',
      },
      {
        source: join(__dirname, 'context.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
})

const server = new ApolloServer({
  schema,
  context: { photon },
})

server
  .listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`),
  )
  .then(serverInfo => {
    async function cleanup() {
      serverInfo.server.close()
      //await photon.disconnect()
    }

    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)
  })
