import React from 'react';

type TUserContext = {
    LoginName: string
    IsAuth: boolean
    SetLogin: (value: string) => void
    SetIsAuth: (value: boolean) => void
}

export const userContext = React.createContext<TUserContext | null>(null);