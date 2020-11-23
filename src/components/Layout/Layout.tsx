import React from 'react';

// === material-ui ===
import { styled } from '@material-ui/core';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const Wrapper = styled('div')({
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '2em 5%',
  });

  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
