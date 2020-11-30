import React, { useState } from 'react';
// === material-ui ===
import { styled, Typography, TextField, Button } from '@material-ui/core';
import { useAddUserMutation } from 'src/generated/graphql';
import { ThunkType } from 'src/redux/Auth/types';

type IRegisterProps = {
  registration: (login: string, password: string, addUser: any) => ThunkType;
}

const Register: React.FC<IRegisterProps> = ({registration}) => {
  const [,addUser] = useAddUserMutation();
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const makeRegistration = () => {
    registration(login, password, addUser);
  }

  return (
    <LoginWrapper>
      <Typography variant="h3">Регистрация</Typography>

      <Form noValidate autoComplete="off">
        <TextField label="Имя" type="text" variant="filled" value={name} onChange={onChangeName} />
        {/* Пока на бэке нет почты */}
        {/* <TextField label="Почта" type="email" variant="filled" /> */}
        <TextField label="Логин" type="text" variant="filled" value={login} onChange={onChangeLogin} />
        <TextField
          type="password"
          label="Пароль"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={onChangePassword}
        />
        <Button variant="contained" size="large" color="primary" onClick={makeRegistration}>
          Регистрация
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default Register;

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