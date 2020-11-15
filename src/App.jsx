// === router ===
import { Route, Switch } from 'react-router-dom';
// === components ===
import withTheme from 'src/hooks/withTheme';
import { HeaderContainer } from 'src/components';
import { Paper } from '@material-ui/core';
// === pages ===
import {
  ContactsPage,
  CurrentGamesPage,
  ForgottenPasswordPage,
  GamePage,
  GameRulesPage,
  HomePage,
  Page404,
  WatchGamePage,
  GameLobby,
} from './pages';

import { ApolloProvider } from '@apollo/client';
import ApolloClient from './api/graphql';

const App = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <Paper square>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game-rules" component={GameRulesPage} />
          <Route path="/watch-game" component={WatchGamePage} />
          <Route path="/lobby" component={GameLobby} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/forgotten-password" component={ForgottenPasswordPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/current-games" component={CurrentGamesPage} />
          <Route path="*" component={Page404} />
        </Switch>
      </Paper>
    </ApolloProvider>
  );
};

export default withTheme(App);
