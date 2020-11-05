import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 5%;
`;
