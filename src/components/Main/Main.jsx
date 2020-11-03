import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lessThen } from '../../utils/mixins';
import LoginPopup from '../Login/Login';
import { getAuthUserDataThunk } from '../../redux/reducers/auth_reducer';

const TestComponent = () => {
  const dispatch = useDispatch()
  const [popup, setPopup] = useState(false);

  const logIn = useCallback(
    () => {
      dispatch(getAuthUserDataThunk())
    },
    [dispatch],
  )

  return (
    <>
      <LoginPopup active={popup} toggle={setPopup} logIn={logIn}/>
      <Background />
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
          <img src="./assets/icons/MAFIA.svg" alt="Mafia logo"></img>
        </Logo>

        <ButtonWrapper>
          <Button onClick={() => setPopup(!popup)}>ВОЙТИ</Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default TestComponent;

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  margin: 0;
  z-index: -10;
  overflow: hidden;

  background-image: url(./assets/img/two_mans.jpg);
  background-position: 30vw center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto 100%;
  background-color: #000;

  ${lessThen.sm`
    background-position: 50vw center;
  `}
`;

const Container = styled.main`
  position: absolute;
  width: 40vw;
  height: 35vh;
  top: 60vh;
  left: 20vw;
  max-width: 400px;
  transform: translateY(-70%);
  ${lessThen.sm`
    width: 80vw;
    top: 50vh;
    left: 10vw;
  `}
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
    &.active {
      color: red;
      font-weight: 400;
    }
  }
`;

const Logo = styled.div`
  display: block;
  width: 100%;
  margin: auto;

  img {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

const Button = styled.div`
  padding: 10px 30px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  border: 1px solid #af0000;
  background-color: #af0000;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 1.25px;

  :hover {
    cursor: pointer;
  }
`;
