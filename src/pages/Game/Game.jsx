import styled from 'styled-components';

// === components ===
import { UserList, Layout, Chat } from '../../components';

// === utils ===
import { colors } from '../../utils/variables';

const GamePage = () => {
  return (
    <Layout>
      <GameRoom>
        <Chat />
        <UserList />
      </GameRoom>
    </Layout>
  );
};

export default GamePage;

const { white } = colors;

const GameRoom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${white};
`;
