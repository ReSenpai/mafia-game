import React from 'react';

// === router ===
import { Route, Switch } from 'react-router-dom';

// === components ===
import HeaderContainer from './components/Header/HeaderContainer';

// === pages ===
import {
  HomePage,
  Page404,
  GameRulesPage,
  WatchGamePage,
  ContactsPage,
  ForgottenPasswordPage,
  GamePage,
  CurrentGamesPage,
} from './pages';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/game-rules" component={GameRulesPage} />
        <Route path="/watch-game" component={WatchGamePage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/forgotten-password" component={ForgottenPasswordPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/current-games" component={CurrentGamesPage} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
};

export default App;
