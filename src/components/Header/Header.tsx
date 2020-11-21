import React from 'react';

// === router ===
import { NavLink } from 'react-router-dom';

// === material-ui ===
import { styled } from '@material-ui/core/styles';
import { HomeSharp } from '@material-ui/icons';

// === components ===
import { Layout } from 'src/components';

const Header: React.FC<unknown> = () => {
  const Wrapper = styled('header')({
    display: 'flex',
    gap: '1em',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  return (
    <Layout>
      <Wrapper>
        <HeaderLink to="/" exact activeClassName="active">
          <HomeSharp fontSize="large" />
        </HeaderLink>
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
        <HeaderLink to="game" activeClassName="active">
          Игра
        </HeaderLink>
        <HeaderLink to="register" activeClassName="active">
          Регистрация
        </HeaderLink>
        <HeaderLink to="login" activeClassName="active">
          Войти
        </HeaderLink>
      </Wrapper>
    </Layout>
  );
};

export default Header;
