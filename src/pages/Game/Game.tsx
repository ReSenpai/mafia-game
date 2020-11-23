import React from 'react';

// === components ===
import { UserList, ChatContainer } from '../../components';

// === material-ui ===
import { styled } from '@material-ui/core';

const GamePage: React.FC = () => {
  const GameRoom = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: '4em',
  });

  return (
    <GameRoom>
      <ChatContainer />
      <UserList />
    </GameRoom>
  );
};

export default GamePage;
