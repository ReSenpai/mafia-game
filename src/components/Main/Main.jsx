import React, { useState } from 'react';
import styled from 'styled-components';

// === assets ===
import TitleLogo from '../../assets/icons/MAFIA.svg';
import BgImg from '../../assets/img/main-page-1-bg.jpg';

// === components ===
import Button from '../Button/Button';
import LoginPopup from '../LoginPopup/LoginPopup';
import Logo from '../Logo/Logo';

const Main = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <LoginPopup active={popup} toggle={() => {}} />
      <Background>
        <img src={BgImg} alt="" />
      </Background>
      <Container>
        <Logo />
        <Online>online</Online>
        <Button popupOptions={{ popup, setPopup }}>войти</Button>
      </Container>
    </>
  );
};

export default Main;

const Background = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
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
