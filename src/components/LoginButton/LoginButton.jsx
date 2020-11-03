import React from 'react';
import styled from 'styled-components';

// === utils ===
import { colors } from '../../utils/variables';
import { buttonReset } from '../../utils/mixins';

const LoginButton = ({
  popupOptions = { popup: false, setPopup: () => {} },
}) => {
  const { popup, setPopup } = popupOptions;

  return (
    <ButtonWrapper>
      <Button onClick={() => setPopup(!popup)}>войти</Button>
    </ButtonWrapper>
  );
};

export default LoginButton;

const { white, crimson } = colors;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const Button = styled.button`
  ${buttonReset()}

  padding: 10px 30px;
  border-radius: 4px;
  color: ${white};
  background-color: ${crimson};
  text-transform: uppercase;
  font-weight: 900;

  :hover {
    cursor: pointer;
  }
`;
