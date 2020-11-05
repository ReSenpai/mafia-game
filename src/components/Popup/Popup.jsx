import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../../assets/icons/remove-gray.svg';

// === utils ===
import { buttonReset, lessThen } from '../../utils/mixins';
import { colors } from '../../utils/variables';

const Popup = ({ children, active, toggle }) => {
  return (
    <Container active={active}>
      <Modal>
        <ModalClose>
          <button onClick={toggle}>
            <img src={CloseIcon} alt="" />
          </button>
        </ModalClose>
        {children}
      </Modal>
    </Container>
  );
};

export default Popup;

const { white, darkgray } = colors;

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
  max-width: 800px;
  background-color: ${darkgray};
  padding: 1em 2em;

  ${lessThen.sm`
    width: 90%;
  `}
`;

const ModalClose = styled.div`
  text-align: right;

  button {
    ${buttonReset};
    background-color: transparent;

    img {
      transform: scale(0.8);
    }
  }
`;
