// Небольшой шаблон, как примерно пишутся редьюсеры, экшены, санки.

import { IAction } from '../../types';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';
// const SET_CAPTCHA = 'auth/SET_CAPTCHA';

interface IInitialState {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  isFetching: boolean;
  captcha: string | null;
}

const initialState: IInitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captcha: null,
};

const authReducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_IS_AUTH: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

/**
 * Actions
 */

export const setAuthUserData = (
  userId: number,
  email: string,
  login: string,
  isAuth: boolean,
): IAction => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setIsAuth = (isAuth: boolean): IAction => ({
  type: SET_IS_AUTH,
  payload: { isAuth },
});

export const setIsFetching = (isFetching: boolean): IAction => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
});

/**
 * Thunks. Вся асинхронщина тут.
 */

export const getAuthUserDataThunk = (time = 8000) => async (
  dispatch: any,
): Promise<void> => {
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  dispatch(setIsFetching(true));
  await sleep(time);
  console.log('getAuthUserDataThunk');
  dispatch(setIsFetching(false));

  dispatch(setIsAuth(true));
};

export default authReducer;
