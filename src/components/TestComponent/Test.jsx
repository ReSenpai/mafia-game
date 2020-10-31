import React from 'react';
import styled from 'styled-components';

const TestComponent = props => {
  return (
    <Container>
      <Block>Вот так</Block>
    </Container>
  );
};

export default TestComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  height: 100vh;
  width: 100vw;
`;

const Block = styled.div`
  width: 50%;
  height: 50%;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 50px;
`;
