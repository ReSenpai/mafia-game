import React, { useContext } from 'react';
import Register from './Register';
import { Redirect } from 'react-router-dom';
import { userContext } from 'src/contexts/userContext';

const RegisterContainer: React.FC<any> = () => {
  const user = useContext(userContext);
  if (user?.IsAuth) return <Redirect to='game' />
  return <Register />;
};

export default RegisterContainer;
