import React from 'react';

// === material-ui ===
import { styled } from '@material-ui/core';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const Wrapper = styled('div')({
    display: 'grid',
    alignContent: 'center',
    gap: '2em',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '1em 5%',
    backgroundColor: 'paper',
  });

  return <Wrapper> {children}</Wrapper>;
};

export default Layout;
