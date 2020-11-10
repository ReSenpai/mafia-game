import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2em 5%;
`;
