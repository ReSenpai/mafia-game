import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// === material-ui ===
import { Button, List, ListItem, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

// === components ===
import Game from './GameInLobby';
import CenteredSpinner from '../CenteredSpinner/CenteredSpinner';

// === thunks ===
import { getGameListThunk } from 'src/redux/Game/game_reducer';

const Lobby: React.FC = () => {
  const dispatch = useDispatch();
  const lobby = useSelector((state: any) => state.Game.lobby);

  const getGamesList = useCallback(
    groupId => {
      dispatch(getGameListThunk(groupId));
    },
    [dispatch],
  );

  if (!lobby.length) {
    console.log('lobby is emty');
    getGamesList(1);
  }

  const games = lobby.map((game: any) => {
    return (
      <ListItem dense={true} divider={true} key={game.id}>
        <Game game={game} />
      </ListItem>
    );
  });

  return (
    <>
      <TitleWrapper>
        <Typography variant="h6">Текущие игры</Typography>
      </TitleWrapper>

      {games ? <List>{games}</List> : <CenteredSpinner />}

      <ButtonWrapper>
        <Button color="primary" variant="contained">
          Создать
        </Button>
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled('div')({
  width: '100%',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'flex-end',
});

const TitleWrapper = styled('div')({
  padding: '16px',
});

export default Lobby;
