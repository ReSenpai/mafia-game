import styled from 'styled-components';

// === components ===
import { Lobby, Layout } from '../../components';

// === utils ===
import { colors } from '../../utils/variables';

const GamePage = () => {
  return (
    <Layout>
      <Wrapper>
        <Lobby />
      </Wrapper>
    </Layout>
  );
};

export default GamePage;

const { black } = colors;

const Wrapper = styled.div`
  background-color: ${black};
`;
