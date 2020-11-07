import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// === material-ui ===
import { List, ListItem, Typography } from '@material-ui/core';

// === components ===
import Game from './GameInLobby';

// === thunks ===
import { getGameListThunk } from 'src/redux/reducers/game_reducer';

const Lobby = () => {
  const dispatch = useDispatch();
  const lobby = useSelector(state => state.Game.lobby);

  const getGamesList = useCallback(
    groupId => {
      dispatch(getGameListThunk(groupId));
    },
    [dispatch],
  );

  if (!lobby.length) {
    console.log('lobby is emty');
    getGamesList();
  }

  const games = lobby.map(game => {
    return (
      <ListItem dense={true} divider={true} key={game.id}>
        <Game game={game} />
      </ListItem>
    );
  });

  return (
    <>
      <Typography variant="h6">Текущие игры</Typography>
      <List>{games}</List>
    </>
  );
};

export default Lobby;
