// src/lib/graphql-client.ts
import { GraphQLClient } from 'graphql-request'

export const HYGRAPH_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/cmazgatcr05db07uxoikosn5n/master'

export const graphQLClient = new GraphQLClient(HYGRAPH_ENDPOINT, {
  headers: {
    // Optional if using auth
    // Authorization: `Bearer YOUR_TOKEN`,
  },
})
