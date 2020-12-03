import React, { useState } from 'react';

// === materual-ui ===
import { Link, Button, styled, TextField, Typography, Modal, makeStyles, Backdrop } from '@material-ui/core';

type TLoginProps = {
  userLogin: (login: string, password: string) => void
}

const Login: React.FC<TLoginProps> = ({userLogin}) => {
  const classes = useStyles();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const logIn = () => {
    userLogin(login, password);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pressEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.shiftKey && event.key === 'Enter') return;
    if (event.key === 'Enter') {
      event.preventDefault();
      logIn();
    }
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>Войти</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backDrop
          }
        }}>
        <LoginWrapper>
          <Typography variant="h3" className={classes.title}>Вход</Typography>

          <Form noValidate autoComplete="off">
            <TextField 
              label="Логин" 
              type="text" 
              variant="filled"
              value={login}
              onChange={onChangeLogin}
              onKeyPress={pressEnter}
            />
            <TextField
              type="password"
              label="Пароль"
              autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={onChangePassword}
              onKeyPress={pressEnter}
            />
            <Button 
              variant="contained" 
              size="large" 
              color="primary"
              onClick={logIn} >
              Войти
            </Button>
            <Link href="/register">Регистрация</Link>
          </Form>
        </LoginWrapper>
      </Modal>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    backdropFilter: "blur(5px)",
    backgroundColor:'rgba(0,0,30,0.4)'
  },
  title: {
    color: 'white'
  },
}))

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
  outline: 'none',
  padding: '15px',
  borderRadius: '5px',
  backgroundColor: 'rgb(4 4 31 / 95%)'
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
