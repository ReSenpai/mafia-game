import React, { Ref, useRef } from 'react';
import styled from 'styled-components';

// === assets ===
import CloseIcon from '../../assets/icons/remove-gray.svg';

// === utils ===
import { useClickOutside } from 'src/hooks/useClickOutside';
import { buttonReset, lessThen } from 'src/utils/mixins';
import { colors } from 'src/utils/variables';

export interface PopupProps {
  children?: React.ReactNode;
  active: boolean;
  toggle: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, active, toggle }) => {
  const ref: Ref<any> = useRef();
  useClickOutside(ref, toggle);

  return (
    <Container active={active} toggle={toggle}>
      <Modal ref={ref}>
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
  display: ${(props: PopupProps) => (props.active ? 'block' : 'none')};
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
