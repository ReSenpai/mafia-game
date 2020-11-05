import React from 'react';
import styled from 'styled-components';

// === utils ===
import { colors } from '../../utils/variables';
import { buttonReset } from '../../utils/mixins';

const Button = ({
  popupOptions = { popup: false, setPopup: () => {} },
  children = 'войти',
}) => {
  const { setPopup } = popupOptions;

  return (
    <ButtonWrapper>
      <CustomButton onClick={() => setPopup(true)}>{children}</CustomButton>
    </ButtonWrapper>
  );
};

export default Button;

const { white, crimson } = colors;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const CustomButton = styled.button`
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
