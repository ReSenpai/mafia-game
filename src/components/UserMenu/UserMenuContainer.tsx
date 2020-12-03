import React, { useContext } from 'react';
import { userContext } from 'src/contexts/userContext';
import UserMenu from './UserMenu';

const UserMenuContainer = () => {
    const user = useContext(userContext);
    const output = () => {
        user.SetUserId(null);
        user.SetLogin(null);
        user.SetIsAuth(false);
    }

    return <UserMenu 
        output={output}
        loginName={user.LoginName} />
}

export default UserMenuContainer;