import styled from 'styled-components';
// === utils ===
import { colors } from 'src/utils/variables';

const Label = ({ children }) => {
  return <CustomLabel>{children}</CustomLabel>;
};

export default Label;

const { lightgray } = colors;

const CustomLabel = styled.label`
  display: block;
  text-align: left;
  color: ${lightgray};
`;
