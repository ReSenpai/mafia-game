import {
  ActionsTypes,
  ISetAuthUserData,
  ISetIsAuth,
  ISetIsFetchingAuth,
  ThunkType,
} from './types';

export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const SET_IS_AUTH = 'auth/SET_IS_AUTH';
export const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captcha: null as string | null,
};

type InitialStateType = typeof initialState;

const authReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialStateType => {
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
  isAuth: boolean,
): ISetAuthUserData => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
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

export const getAuthUserDataThunk = (
  time = 8000,
): ThunkType => async dispatch => {
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  dispatch(setIsFetching(true));
  await sleep(time);
  console.log('getAuthUserDataThunk');
  dispatch(setIsFetching(false));

  dispatch(setIsAuth(true));
};

export default authReducer;
