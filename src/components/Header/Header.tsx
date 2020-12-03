import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// === material-ui ===
import { styled } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import LoginContainer from 'src/pages/Login/LoginContainer';
import UserMenuContainer from '../UserMenu/UserMenuContainer';

type THeaderProps = {
  IsAuth: boolean | undefined
}

const Header: React.FC<THeaderProps> = ({IsAuth}) => {

  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <HeaderContainer>
      <IconButton
        aria-label="delete"
        onClick={() => setIsDrawerOpened(!isDrawerOpened)}
      >
        <Menu />
      </IconButton>
      { IsAuth
        ? <UserMenuContainer />
        : <LoginContainer />}
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpened}
        onClose={() => setIsDrawerOpened(false)}
        onOpen={() => setIsDrawerOpened(true)}
      >
        <Wrapper>
          <HeaderLink to="/" exact activeClassName="active">
            Главная
          </HeaderLink>
          <HeaderLink to="game-rules" activeClassName="active">
            Правила
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
        </Wrapper>
      </SwipeableDrawer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Wrapper = styled('header')({
  display: 'grid',
  gap: '1em',
  padding: '2em 4em',
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
