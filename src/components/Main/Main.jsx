import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// === assets ===
import TitleLogo from '../../assets/icons/MAFIA.svg';
import BgImg from '../../assets/img/main-page-1-bg.png';

// === components ===
import Button from '../Button/Button';
import LoginPopup from '../LoginPopup/LoginPopup';

// === utils ===
import { lessThen } from '../../utils/mixins';
import { colors } from '../../utils/variables';

const Main = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <LoginPopup active={popup} toggle={() => {}} />
      <Background>
        <img src={BgImg} alt="" />
      </Background>
      <Container>
        <LinkContainer>
          <NavLink to="game-rules" activeClassName="active">
            Правила
          </NavLink>
          <NavLink to="watch-game" activeClassName="active">
            Посмотреть игру
          </NavLink>
          <NavLink to="contacts" activeClassName="active">
            Контакты
          </NavLink>
        </LinkContainer>
        <Logo>
          <img src={TitleLogo} alt="Mafia logo" />
        </Logo>
        <Button popupOptions={{ popup, setPopup }}>войти</Button>
      </Container>
    </>
  );
};

export default Main;

const { white, red } = colors;

const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  img {
    height: 100vh;
    object-fit: cover;
  }

  ${lessThen.sm`
    justify-content: flex-start;
  `}
`;

const Container = styled.main`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(30%, -50%);
  max-width: 500px;

  ${lessThen.sm`
    transform: translate(0, -50%);
  `};
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    &:link {
      color: ${white};
    }
    &:visited {
      color: ${white};
    }
    &.active {
      color: ${red};
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

const Logo = styled.div`
  width: 100%;
  margin: auto;

  img {
    width: 100%;
  }
`;
