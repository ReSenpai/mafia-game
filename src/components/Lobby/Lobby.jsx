import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

// === material-ui ===
import { List, ListItem, Typography } from '@material-ui/core';

// === components ===
import Game from './GameInLobby'

// === utils ===
import { colors } from '../../utils/variables';
const { lightgray } = colors

// === thunks ===
import { getGameListThunk } from 'src/redux/reducers/game_reducer'

const Lobby = () => {
  const dispatch = useDispatch()
  const lobby = useSelector(state => state.Game.lobby)

  const getGamesList = useCallback(groupId => {
    dispatch(getGameListThunk(groupId))
  }, [dispatch])

  if (!lobby.length) {
    console.log('lobby is emty')
    getGamesList()
  }



  const games = lobby.map(game => {
    return (
      <ListItem
        dense={true}
        divider={true}
        key={game.id}
      >
        <Game
          game={game}
        />
      </ListItem>
    )
  })

  return (
    <Container>
      <Typography variant="h6">
        Текущие игры
      </Typography>
      <List>
        {games}
      </List>
    </Container>
  )
}

const Container = styled.div`
  color: lightgray;
`

export default Lobby
