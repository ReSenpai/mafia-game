import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoginButton from '../LoginButton/LoginButton';

// === utils ===
import { buttonReset, lessThen } from '../../utils/mixins';
import { colors } from '../../utils/variables';

// === icons ===
import { BsEye } from 'react-icons/bs';

const LoginPopup = props => {
  // EyeIcon for password field
  // <BsEye color={colors.lightgray} size="24px" />;

  return (
    <Container active={props.active} onClick={() => props.toggle(false)}>
      <Modal>
        <ModalTitle>Вход</ModalTitle>
        <ModalForm>
          <ModalFormItem>
            <ModalFormLabel>Логин</ModalFormLabel>
            <ModalFormLoginInput />
          </ModalFormItem>

          <ModalFormItem>
            <ModalFormLabel>Пароль</ModalFormLabel>
            <ModalFormPasswordInput type="password" />
          </ModalFormItem>
          <LoginButton />
          <ModalRegister>Регистрация</ModalRegister>
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default LoginPopup;

LoginPopup.propTypes = {
  active: PropTypes.bool,
  toggle: PropTypes.func,
};

const { white, middlegray, darkgray, lightgray } = colors;

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
    color: ${white};
    padding: 22px 16px 10px;
    margin-top: 0.5em;
    width: 100%;
    background-color: ${middlegray};
    border: none;
    border-bottom: 1px solid ${white};
    border-radius: 4px 4px 0 0;
  }
`;
const ModalFormLoginInput = styled.input``;
const ModalFormPasswordInput = styled.input``;
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
