import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

// === components ===
import { Layout, RegisterPopup } from 'src/components';

const Header = props => {
  console.log(props);
  const [popup, setPopup] = useState(false);

  const Wrapper = styled('header')({
    display: 'flex',
    gap: '2em',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const Container = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
  });

  const HeaderLink = styled(NavLink)(({ theme }) => {
    return {
      textDecoration: 'none',
      '&:link': {
        textDecoration: 'none',
      },
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary.main,
      },
      '&:visited': {
        textDecoration: 'none',
      },
      '&.active': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 400,
      },
    };
  });

  const RegLink = styled('a')(({ theme }) => {
    return {
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
      },
    };
  });

  return (
    <Layout>
      <Wrapper>
        <Container>
          <HeaderLink to="game-rules" activeClassName="active">
            Правила
          </HeaderLink>
          <HeaderLink to="watch-game" activeClassName="active">
            Посмотреть игру
          </HeaderLink>
          <HeaderLink to="lobby" activeClassName="active">
            Лобби
          </HeaderLink>
          <HeaderLink to="contacts" activeClassName="active">
            Контакты
          </HeaderLink>
        </Container>
        <Container>
          <RegisterPopup active={popup} toggle={() => setPopup(false)} />
          <RegLink onClick={() => setPopup(true)}>Регистрация</RegLink>
          <HeaderLink to="forgotten-password" activeClassName="active">
            Забыли пароль?
          </HeaderLink>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Header;
