import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../Layout/Layout';
import RegisterPopup from '../RegisterPopup/RegisterPopup';

import { colors } from '../../utils/variables';

const Header = () => {
  const [popup, setPopup] = useState(false);

  return (
    <Layout>
      <Wrapper>
        <Container>
          <NavLink to="game-rules" activeClassName="active">
            Правила
          </NavLink>
          <NavLink to="watch-game" activeClassName="active">
            Посмотреть игру
          </NavLink>
          <NavLink to="contacts" activeClassName="active">
            Контакты
          </NavLink>
        </Container>
        <Container>
          <RegisterPopup active={popup} toggle={() => setPopup(false)} />
          <a onClick={() => setPopup(true)}>Регистрация</a>
          <NavLink to="forgotten-password" activeClassName="active">
            Забыли пароль?
          </NavLink>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Header;

const { white, red } = colors;

const Wrapper = styled.header`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;

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
    }
  }
`;
