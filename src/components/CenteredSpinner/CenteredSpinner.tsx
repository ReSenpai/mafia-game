import React from 'react';

// === material-ui ===
import { CircularProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export interface CenteredSpinnerProps {
  color?: 'primary' | 'secondary' | 'inherit' | undefined;
}

const Center: React.FC<CenteredSpinnerProps> = ({ color }) => {
  const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  });

  return (
    <Container>
      <CircularProgress color={color} size={50} />
    </Container>
  );
};

export default Center;
