import React, { useContext } from 'react';
import Register from './Register';
import { Redirect } from 'react-router-dom';
import { userContext } from 'src/contexts/userContext';
import { useAddUserMutation } from 'src/generated/graphql';

const RegisterContainer: React.FC<unknown> = () => {
  const [,addUser] = useAddUserMutation();
  const user = useContext(userContext);

  const registration = async (login: string, password: string): Promise<void> => {
    const response = await addUser({login, password});
    const userId = response.data?.user?.addUser?.id;
    user?.SetIsAuth(true);
    userId ? user?.SetUserId(userId) : console.error("UserId didn't come");
  }

  if (user?.IsAuth) return <Redirect to='game' />
  return <Register registration={ registration } />;
};

export default RegisterContainer;
