import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ReactComponent as Error404 } from './assets/icons/error_404.svg';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="*" render={() => <HeaderContainer />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
