import styled from 'styled-components';

// === components ===
import { UserList, Layout, ChatContainer } from '../../components';

const GamePage = () => {
  return (
    <Layout>
      <GameRoom>
        <ChatContainer />
        <UserList />
      </GameRoom>
    </Layout>
  );
};

export default GamePage;

const GameRoom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4em;
`;
