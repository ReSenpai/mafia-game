import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '..';
import { SET_IS_AUTH, SET_IS_FETCHING, SET_USER_DATA } from './auth_reducer';

export interface ISetAuthUserData {
  type: typeof SET_USER_DATA;
  payload: {
    userId: number;
    email: string;
    login: string;
    isAuth: boolean;
  };
}
export interface ISetIsAuth {
  type: typeof SET_IS_AUTH;
  isAuth: boolean;
}
export interface ISetIsFetchingAuth {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
}

export type ActionsTypes = ISetAuthUserData | ISetIsAuth | ISetIsFetchingAuth;
export type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
