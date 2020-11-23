import { createClient } from 'urql';

export const client = createClient({
  url: 'https://mafia-game-backend-api.herokuapp.com/graphql',
});
