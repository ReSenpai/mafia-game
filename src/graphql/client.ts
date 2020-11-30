import { createClient } from 'urql';

export const client = createClient({
  url: 'http://localhost:5000/graphql',
});
