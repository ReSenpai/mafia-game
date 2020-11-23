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
      <ListItem divider={true} key={game.id}>
        <Game game={game} />
      </ListItem>
    );
  });

  return (
    <Wrapper>
      <Typography variant="h6">Текущие игры</Typography>

      {games ? <List>{games}</List> : <CenteredSpinner />}

      <ButtonWrapper>
        <Button color="primary" variant="contained">
          Создать
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  width: '100%',
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

export default Lobby;
