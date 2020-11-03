import React from 'react';

// === router ===
import { Route, Switch } from 'react-router-dom';

// === components ===
import Main from './components/Main/Main';

// === store ===
import { useSelector, useDispatch } from 'react-redux';
import { getAuthUserDataThunk } from './redux/reducers/auth_reducer';
// === pages ===
import {
  HomePage,
  Page404,
  GameRulesPage,
  WatchGamePage,
  ContactsPage,
  RegisterPage,
  ForgottenPasswordPage,
  GamePage,
  CurrentGamesPage,
} from './pages';

const App = () => {
  const { isAuth } = useSelector(state => state.Auth)

  if (!isAuth) {
    return <Main />;
  }

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/game-rules" component={GameRulesPage} />
        <Route exact path="/watch-game" component={WatchGamePage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route
          exact
          path="/forgotten-password"
          component={ForgottenPasswordPage}
        />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/current-games" component={CurrentGamesPage} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
};

export default App
