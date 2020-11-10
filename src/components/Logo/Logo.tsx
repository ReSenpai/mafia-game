import React from 'react';
import styled from 'styled-components';

// === assets ===
import TitleLogo from '../../assets/icons/MAFIA.svg';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <LogoWrapper size={size}>
      <img src={TitleLogo} alt="Mafia logo" />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: ${(props: LogoProps) => props.size};

  img {
    width: 100%;
  }
`;
