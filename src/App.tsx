import React, { useState } from 'react';

// === router ===
import { Route, Switch } from 'react-router-dom';

// === components ===
import withTheme from 'src/hoc/withTheme';
import { HeaderContainer, Layout } from 'src/components';
import { Paper } from '@material-ui/core';

// === pages ===
import {
  ContactsPage,
  ForgottenPasswordPage,
  GamePage,
  GameRulesPage,
  HomePage,
  Page404,
  GameLobby,
  Login,
  Register,
} from './pages';
import { userContext } from './contexts/userContext';

const App = () => {

  const [LoginName, SetLogin] = useState('');
  const [IsAuth, SetIsAuth] = useState(false);

  const user = {
    LoginName,
    IsAuth,
    SetLogin,
    SetIsAuth
  }

  
  return (
    <userContext.Provider value={user}>
      <Paper square>
        <Layout>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/game-rules" component={GameRulesPage} />
            <Route path="/lobby" component={GameLobby} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/forgotten-password" component={ForgottenPasswordPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/game" component={GamePage} />
            <Route path="*" component={Page404} />
          </Switch>
        </Layout>
      </Paper>
    </userContext.Provider>
  );
};

export default withTheme(App);
