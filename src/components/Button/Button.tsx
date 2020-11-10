import React from 'react';
import styled from 'styled-components';

// === utils ===
import { colors } from 'src/utils/variables';
import { buttonReset } from 'src/utils/mixins';

interface ButtonProps {
  popupOptions: {
    popup: false;
    setPopup: (bool: boolean) => Record<string, unknown>;
  };
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ popupOptions, children }) => {
  const fixMePlease = () => {
    console.log('Нихера не пришло');
  };
  const { setPopup } = popupOptions || fixMePlease;

  return (
    <ButtonWrapper>
      <CustomButton onClick={() => setPopup(true)}>{children}</CustomButton>
    </ButtonWrapper>
  );
};

export default Button;

const { crimson, white } = colors;

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
