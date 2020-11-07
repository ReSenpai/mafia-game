// === router ===
import { Route, Switch } from 'react-router-dom';
// === components ===
import withTheme from 'src/hooks/withTheme'
import { HeaderContainer } from 'src/components';
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

const App = () => {
  return (
    <>
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
    </>
  );
};

export default withTheme(App);
