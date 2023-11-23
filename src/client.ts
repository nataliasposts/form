import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GRAPHQL_SERVER_URI = 'http://localhost:4000';

const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URI
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
