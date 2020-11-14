import styled from 'styled-components';

// === assets ===
import TitleLogo from 'src/assets/icons/MAFIA.svg';

const Logo = ({ size }) => {
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
  max-width: ${({ size }) => size};
    /* background-color: #323299; */

  img {
    width: 100%;
  }
`;
