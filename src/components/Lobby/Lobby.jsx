import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

// === material-ui ===
import { Button, List, ListItem, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

// === components ===
import Game from './GameInLobby';

// === thunks ===
import { getGameListThunk } from 'src/redux/reducers/game_reducer';
// import * as getChatMessagesQuery from './getChatMessagesQuery.graphql'
import gql from 'graphql-tag';

const query = gql`
  query UserQuery {
    getUsers(limit: 2) {
      name
      login
    }
  }
`;

const Lobby = () => {
  const dispatch = useDispatch();
  const lobby = useSelector(state => state.Game.lobby);

  // graphQL

  const { data } = useQuery(query);

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

  console.log(data);
  return (
    <>
      <TitleWrapper>
        <Typography variant="h6">Текущие игры</Typography>
      </TitleWrapper>
      <List>{games}</List>
      <ButtonWrapper>
        <Button color="primary" variant="contained">
          Создать
        </Button>
      </ButtonWrapper>

      <div>
        {data
          ? data.getUsers.map(v => (
              <>
                <p>{v.login}</p>
                <p>{v.name}</p>
                <br></br>
              </>
            ))
          : 'loading'}
      </div>
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
