import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.hygraph.com/v2/ckw9gxfvl1igz01z27s9343r9/master',
  cache: new InMemoryCache(),
})

export default client
