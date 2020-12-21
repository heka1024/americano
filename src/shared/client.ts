import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://webtest.snulife.com:8000/graphql/',
  cache: new InMemoryCache()
});