import React from 'react';

type TUserContext = {
    LoginName: string | null
    IsAuth: boolean
    UserId: string | null
    SetLogin: (value: string | null) => void
    SetIsAuth: (value: boolean) => void
    SetUserId: (value: string | null) => void
}

export const userContext = React.createContext<TUserContext>({
    LoginName: null,
    IsAuth: false,
    UserId: null,
    SetLogin: (value: string | null) => {console.log('undefined')},
    SetIsAuth: (value: boolean) => {console.log('undefined')},
    SetUserId: (value: string | null) => {console.log('undefined')},
});