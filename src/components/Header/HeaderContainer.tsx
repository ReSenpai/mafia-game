import React, { useContext } from 'react';
import { userContext } from 'src/contexts/userContext';
import Header from './Header';

const HeaderContainer: React.FC<unknown> = () => {
  const user = useContext(userContext);

  return <Header IsAuth={user.IsAuth} />;
};

export default HeaderContainer;
