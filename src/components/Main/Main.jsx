import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lessThen } from '../../utils/mixins'

const TestComponent = () => {
  return (
    <MainWrapper>
      <Container>
        <LinkContainer>
          <NavLink to='game-rules' activeClassName='active'>
            Правила игры
            </NavLink>
          <NavLink to='watch-game' activeClassName='active'>
            Посмотреть игру
            </NavLink>
          <NavLink to='contacts' activeClassName='active'>
            Контакты
            </NavLink>
        </LinkContainer>
        <Logo src='./assets/MAFIA.svg' />

        <ButtonWrapper>
          <Button>
            ВОЙТИ
          </Button>
        </ButtonWrapper>
      </Container>
    </MainWrapper>
  );
};

export default TestComponent;

const MainWrapper = styled.div`
  height: 100%;
  margin: 0;
  z-index: -100;
  overflow: hidden;

  background-image: url(./assets/two_mans.jpg);
  background-position: 30vw center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto 100%;
  background-color: #000;

  ${lessThen.sm`
    background-position: 50vw center;
  `}
`

const Container = styled.main`
    width: 40vw;
    height: 35vh;
    position: absolute;
    top: 55vh;
    left: 20vw;
    max-width: 400px;
    transform: translateY(-70%);

    ${lessThen.sm`
      width: 80vw;
      top: 50vh;
      left: 10vw;
    `}
`
const LinkContainer = styled.div`
    display: flex;
    a {
        text-decoration: none;
        padding-right: 30px;
        &:link {
            color: white;
        }
        &:visited {
            color: white;
        }
        &.active {
            color: red;
            font-weight: 400;
            font-size: 18px;
        }
    }
`


const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 350px;
`
const ButtonWrapper = styled.div`
  margin: auto;
  width: fit-content;
`

const Button = styled.div`
  padding: 10px 30px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  border: 1px solid #AF0000;
  background-color: #AF0000;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 1.25px;

  :hover {
    cursor: pointer;
  }
`
