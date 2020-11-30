import { useAddUserMutation } from 'src/generated/graphql';
import {
  ActionsTypes,
  IInitialState,
  ISetAuthUserData,
  ISetIsAuth,
  ISetIsFetchingAuth,
  ThunkType,
} from './types';

export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const SET_IS_AUTH = 'auth/SET_IS_AUTH';
export const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';

const initialState: IInitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captcha: null,
};

const authReducer = (
  state = initialState,
  action: ActionsTypes,
): IInitialState => {
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
        isAuth: action.isAuth,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

// Actions

export const setAuthUserData = (
  userId: number,
  email: string,
  login: string,
): ISetAuthUserData => ({
  type: SET_USER_DATA,
  payload: { userId, email, login },
});

export const setIsAuth = (isAuth: boolean): ISetIsAuth => ({
  type: SET_IS_AUTH,
  isAuth,
});

export const setIsFetching = (isFetching: boolean): ISetIsFetchingAuth => ({
  type: SET_IS_FETCHING,
  isFetching,
});

// Thunks

export const registration = (
  login: string, 
  password: string,
  addUser: ({login, password}: any) => Promise<unknown>
): ThunkType => async dispatch => {
  dispatch(setIsFetching(true));
  const response = await addUser({login, password});
  console.log(response);
  dispatch(setIsFetching(false));
  dispatch(setIsAuth(true));
};

export default authReducer;
