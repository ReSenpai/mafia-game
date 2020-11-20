import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://mafia-game-backend-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
