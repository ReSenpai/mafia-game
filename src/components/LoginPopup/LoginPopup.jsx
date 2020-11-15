// === components ===
import { Button, Input, Popup } from 'src/components';
import { styled } from '@material-ui/core/styles';

// === utils ===
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'src/redux/reducers/auth_reducer';
import { useEffect, useState } from 'react';

const LoginPopup = ({ active, toggle }) => {
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.Auth);

  const loginUser = async evt => {
    evt.preventDefault();
    dispatch(loginUserThunk(loginData));
  };

  useEffect(() => {
    toggle()
  }, [isAuth])

  return (
    <Popup {...{ active, toggle }}>
      <ModalTitle>Вход</ModalTitle>
      <ModalForm onSubmit={loginUser}>
        <ModalFormItem>
          <ModalFormLabel>Логин</ModalFormLabel>
          <Input
            value={loginData.login}
            onChange={e =>
              setLoginData({ ...loginData, login: e.target.value })
            }
            type="text"
          />
        </ModalFormItem>

        <ModalFormItem>
          <ModalFormLabel>Пароль</ModalFormLabel>
          <Input
            value={loginData.password}
            onChange={e =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            type="password"
          />
        </ModalFormItem>

        <Button>войти</Button>
      </ModalForm>
    </Popup>
  );
};

export default LoginPopup;

const ModalTitle = styled('div')({
  fontSize: '3rem',
  textAlign: 'center',
});

const ModalForm = styled('form')({
  display: 'flex',
  gap: '2em',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2em',

  input: {
    marginTop: '0.5em',
  },
});

const ModalFormLabel = styled('div')({
  display: 'block',
  textAlign: 'left',
  // color: '${lightgray}',
});

const ModalFormItem = styled('div')({
  textAlign: 'center',
  width: '100%',
});
