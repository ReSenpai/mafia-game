import React from 'react';
import styled from 'styled-components';

// === utils ===
import { colors } from 'src/utils/variables';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <CustomLabel>{children}</CustomLabel>;
};

export default Label;

const { lightgray } = colors;

const CustomLabel = styled.label`
  display: block;
  text-align: left;
  color: ${lightgray};
`;
