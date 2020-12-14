import { createClient } from 'urql';

export const client = createClient({
  url: 'https://mafia-game-jsmisc.herokuapp.com/graphql',
});
