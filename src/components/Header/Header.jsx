import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <NavLink to='game-rules' activeClassName='active'>
          Правила игры
                </NavLink>
        <NavLink to='watch-game' activeClassName='active'>
          Посмотреть игру
                </NavLink>
        <NavLink to='contacts' activeClassName='active'>
          Контакты
                </NavLink>
      </Container>
      <Container>
        <NavLink to='register' activeClassName='active'>
          Регистрация
                </NavLink>
        <NavLink to='forgotten-password' activeClassName='active'>
          Забыли пароль?
                </NavLink>
      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding-top: 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 18px;
    max-width: 1080px;
    margin: auto;
`

const Container = styled.div`
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
