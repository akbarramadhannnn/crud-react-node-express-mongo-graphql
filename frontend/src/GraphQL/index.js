import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  console.log('graphqlErrors', graphqlErrors);
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://192.168.1.16:8082/graphql' }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
