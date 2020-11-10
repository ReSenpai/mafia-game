import React from 'react';
import styled from 'styled-components';

// === components ===
import { Button, Input, Popup } from 'src/components';

// === utils ===
import { colors } from 'src/utils/variables';
import { PopupProps } from '../Popup/Popup';

const RegisterPopup: React.FC<PopupProps> = ({ active, toggle }) => {
  return (
    <Popup {...{ active, toggle }}>
      <ModalTitle>Регистрация</ModalTitle>
      <ModalForm>
        <ModalFormItem>
          <Label>Имя</Label>
          <Input type="text" />
        </ModalFormItem>

        <ModalFormItem>
          <Label>Email</Label>
          <Input type="text" />
        </ModalFormItem>

        <ModalFormItem>
          <Label>Логин</Label>
          <Input type="text" />
        </ModalFormItem>

        <ModalFormItem>
          <Label>Пароль</Label>
          <Input type="password" />
        </ModalFormItem>
        <Button
          popupOptions={{
            popup: false,
            setPopup: () => {
              console.log('Delete this');
            },
          }}
        >
          регистрация
        </Button>
      </ModalForm>
    </Popup>
  );
};

export default RegisterPopup;

const { lightgray } = colors;

const ModalTitle = styled.div`
  font-size: 3rem;
  text-align: center;
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

const Label = styled.label`
  display: block;
  text-align: left;
  color: ${lightgray};
`;

const ModalFormItem = styled.div`
  text-align: center;
  width: 100%;
`;
