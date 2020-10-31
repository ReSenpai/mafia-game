import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ReactComponent as Error404 } from './assets/icons/error_404.svg';
import TestComponent from './components/TestComponent/Test';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={'/game'} />} />

        <Route path="/game" render={() => <TestComponent />} />

        <Route path="*" render={() => <Error404 />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
