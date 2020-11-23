import React from 'react';

// === material-ui ===
import { styled, Typography, TextField, Button } from '@material-ui/core';

const Register: React.FC<unknown> = () => {
  const LoginWrapper = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gap: '2em',
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
      <Typography variant="h3">Регистрация</Typography>

      <Form noValidate autoComplete="off">
        <TextField label="Имя" type="text" variant="filled" />
        <TextField label="Почта" type="email" variant="filled" />
        <TextField label="Логин" type="text" variant="filled" />
        <TextField
          type="password"
          label="Пароль"
          autoComplete="current-password"
          variant="filled"
        />
        <Button variant="contained" size="large" color="primary">
          Регистрация
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default Register;
