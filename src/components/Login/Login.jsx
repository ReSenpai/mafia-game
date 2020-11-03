import React from 'react';
import styled from 'styled-components';
import { lessThen } from '../../utils/mixins';

const LoginPopup = props => {
  return (
    <Container active={props.active} onClick={() => props.toggle(false)}>
      <Modal>
        <Title>Вход</Title>
      </Modal>
    </Container>
  );
};

export default LoginPopup;

const Container = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  color: white;
  font-family: 'Roboto', sans-serif;
`;

const Modal = styled.div`
  margin: auto;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  max-width: 800px;
  max-height: 540px;
  background-color: #202020;

  ${lessThen.sm`
    transform: translate(-50%, -55%);
    width: 90%;
    height: 90%;
  `}
`;

const Title = styled.span`
  display: block;
  font-size: 48px;
  width: fit-content;
  margin: 50px auto;
`;
