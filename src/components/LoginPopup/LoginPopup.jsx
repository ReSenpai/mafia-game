import React from 'react';
import styled from 'styled-components';

// === components ===
import LoginButton from '../LoginButton/LoginButton';
import Input from '../Input/Input';

// === utils ===
import { buttonReset, lessThen } from '../../utils/mixins';
import { colors } from '../../utils/variables';

const LoginPopup = ({ active, toggle }) => {
  return (
    <Container active={active} onClick={() => toggle(false)}>
      <Modal>
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
          <LoginButton />
          <ModalRegister>Регистрация</ModalRegister>
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default LoginPopup;

const { white, darkgray, lightgray } = colors;

const Container = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${white};
`;

const Modal = styled.div`
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  max-width: 800px;
  max-height: 540px;
  background-color: ${darkgray};

  ${lessThen.sm`
    transform: translate(-50%, -55%);
    width: 90%;
    height: 90%;
  `}
`;

const ModalTitle = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 1em;
`;

const ModalForm = styled.form`
  display: flex;
  gap: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  input {
    margin-top: 0.5em;
  }
`;

const ModalFormLabel = styled.label`
  display: block;
  text-align: left;
  color: ${lightgray};
`;

const ModalFormItem = styled.div`
  text-align: center;
  width: 80%;
`;

const ModalRegister = styled.button`
  background-color: transparent;

  ${buttonReset()}

  &:hover {
    text-decoration: underline;
  }
`;
