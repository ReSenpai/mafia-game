import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// === components ===
import { Layout, RegisterPopup } from 'src/components';

// === utils ===
import { colors } from 'src/utils/variables';

const Header = () => {
  const [popup, setPopup] = useState(false);
  const theme = useTheme()

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
      color: ${theme.palette.text.main};
    }
    &:hover {
      color: ${theme.palette.text.dark};
    }
    &:visited {
      color: ${theme.palette.text.dark};
    }
    &.active {
      color: ${theme.danger};
      font-weight: 400;
    }
  }
`;


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
          <NavLink to="lobby" activeClassName="active">
            Лобби
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
