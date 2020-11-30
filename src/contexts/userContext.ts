import { Maybe } from './../generated/graphql';
import React from 'react';

type TUserContext = {
    LoginName: string | null
    IsAuth: boolean
    UserId: string | null
    SetLogin: (value: string) => void
    SetIsAuth: (value: boolean) => void
    SetUserId: (value: string) => void
}

export const userContext = React.createContext<TUserContext | null>(null);