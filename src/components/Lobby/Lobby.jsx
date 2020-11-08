import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

// === material-ui ===
import { List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// === components ===
import Game from './GameInLobby';

// === thunks ===
import { getGameListThunk } from 'src/redux/reducers/game_reducer';

const useStyles = makeStyles({
  root: {
    // color: 'white'
  },
});

const Lobby = () => {
  const classes = useStyles();
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
    <section>
      <Typography variant="h5" className={classes.root}>
        Текущие игры
      </Typography>
      <List>{games}</List>
    </section>
  );
};

export default Lobby;
