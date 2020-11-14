// === components ===
import { Button, Input, Popup } from 'src/components';
import { styled } from '@material-ui/core/styles';

// === utils ===
import { colors } from 'src/utils/variables';

const LoginPopup = ({ active, toggle }) => {
  return (
    <Popup {...{ active, toggle }}>
      <ModalTitle>Вход</ModalTitle>
      <ModalForm>
        <ModalFormItem>
          <ModalFormLabel>Логин</ModalFormLabel>
          <Input type="text" />
        </ModalFormItem>

        <ModalFormItem>
          <ModalFormLabel>Пароль</ModalFormLabel>
          <Input type="password" />
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
})

const ModalForm = styled('form')({
  display: 'flex',
  gap: '2em',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2em',

  input: {
    marginTop: '0.5em',
  }
})

const ModalFormLabel = styled('label')({
  display: 'block',
  textAlign: 'left',
  // color: '${lightgray}',
})

const ModalFormItem = styled('div')({
  textAlign: 'center',
  width: '100%',
})
