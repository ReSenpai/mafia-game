import React from 'react';

// === materual-ui ===
import { Link, Button, styled, TextField, Typography } from '@material-ui/core';

const Login: React.FC<unknown> = () => {
  const LoginWrapper = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gap: '1em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  });

  const Form = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '1.5em',

    '& > *': {
      minWidth: '300px',
      width: '90%',
      maxWidth: '400px',
    },
  });

  return (
    <LoginWrapper>
      <Typography variant="h3">Вход</Typography>

      <Form noValidate autoComplete="off">
        <TextField label="Логин" type="text" variant="filled" />
        <TextField
          type="password"
          label="Пароль"
          autoComplete="current-password"
          variant="filled"
        />
        <Button variant="contained" size="large" color="primary">
          Войти
        </Button>
        <Link href="/register">Регистрация</Link>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
