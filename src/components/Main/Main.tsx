import React from 'react';
import styled from 'styled-components';

// === assets ===
import BgImg from '../../assets/img/main-page-2-bg.png';

// === components ===
import { Logo } from 'src/components';

const Main: React.FC = () => {
  return (
    <>
      <Background>
        <img src={BgImg} alt="" />
      </Background>
      <Container>
        <Logo />
        <Online>online</Online>
      </Container>
    </>
  );
};

export default Main;

const Background = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  z-index: -10;
  overflow: hidden;

  img {
    height: 100vh;
  }
`;

const Container = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-width: 320px;
  text-align: center;
`;

const Online = styled.div`
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 1em;
`;
