import React from 'react';
import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface GameProps {
  game: any;
}

const Game: React.FC<GameProps> = ({ game }) => {
  const date =
    game.date.getDate() +
    '.' +
    (game.date.getMonth() + 1) +
    ' ' +
    game.date.getHours() +
    ':' +
    game.date.getMinutes();

  return (
    <Container>
      <FirstLine>
        <div>
          <Date>{date}</Date>
          <Title># {game.name}</Title>
          <MaxPlayers>
            Игроков: {game.players.length} / {game.size}
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
  );
};

const FirstLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

const Date = styled.span``;
const Title = styled.span``;
const MaxPlayers = styled.span``;

const IconWrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export default Game;
