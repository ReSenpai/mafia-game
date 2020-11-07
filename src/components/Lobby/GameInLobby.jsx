import styled from 'styled-components'
import { LinearProgress } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const Game = ({ game }) => {
  const date = game.date.getDate() + '.' + (game.date.getMonth() + 1) + ' ' + game.date.getHours() + ':' + game.date.getMinutes()


  return (
    <Container>
      <FirstLine>
        <div>
          <Date>
            {date}
          </Date>
          <Title>
            {game.name}
          </Title>
          <MaxPlayers>
            Максимальное количество игроков: {game.size}
          </MaxPlayers>
        </div>
        <div>
          <span>Ожидает {game.size - game.players.length} участников</span>
          <IconWrapper>
            <AddIcon />
          </IconWrapper>
        </div>
      </FirstLine>
      <LinearProgress
        variant="determinate"
        value={(game.players.length / game.size) * 100}
        valueBuffer={55}
      />
    </Container>
  )
}

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div > * {
    vertical-align: middle;
    display: inline-block;
  }

`

const Date = styled.span`
  padding-right: 10px;
`
const Title = styled.span`
  padding-right: 10px;
`
const MaxPlayers = styled.span`
  padding-left: 10px;
`

const IconWrapper = styled.div`

`

const Container = styled.div`
  width: 100%;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`

export default Game
