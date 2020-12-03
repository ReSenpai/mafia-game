import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { userContext } from 'src/contexts/userContext';
import { useLoginUserMutation } from 'src/generated/graphql';
import Login from './Login';

const LoginContainer: React.FC<unknown> = () => {
    const [, loginUser] = useLoginUserMutation();
    const user = useContext(userContext);

    const userLogin = async (login: string, password: string) => {
        const response = await loginUser({login, password});
        // TODO: деструктурировать переменные ниже
        const userId = response.data?.user?.loginUser?.id;
        const userLogin = response.data?.user?.loginUser?.login;
        // TODO: вынести проверку ниже в утилы, тоже самое в RegisterContainer
        if (userId && userLogin) {
            user.SetLogin(userLogin)
            user.SetUserId(userId);
            user.SetIsAuth(true);
        } else {
            console.error("UserId or userLogin didn't come");
        }
    }

    if (user?.IsAuth) return <Redirect to='game' />
    return <Login userLogin={userLogin} />;
};

export default LoginContainer;