// Небольшой шаблон, как примерно пишутся редьюсеры, экшены, санки.

import Axios from 'axios';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';
const SET_REFRESH_TOKEN = 'auth/SET_REFRESH_TOKEN';
const SET_TOKEN = 'auth/SET_TOKEN';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captcha: null,
  token: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action) => {
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
    case SET_REFRESH_TOKEN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_TOKEN: {
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

// хз как лучше типы описывать, но в редьюсерах совсем без них будет боль, мб их на тс писать?
// Можно хотя бы в jsdoc писать :)

/**
 * @param {Number} userId
 * @param {String} email
 * @param {String} login
 * @param {Boolean} isAuth
 */

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

/**
 * type setIsAuthType = {
 * type: typeof SET_IS_AUTH,
 * isAuth: boolean
 * }
 */

export const setIsAuth = isAuth => ({
  type: SET_IS_AUTH,
  payload: { isAuth },
});

/**
 * type setIsFetchingType = {
 * type: typeof SET_IS_FETCHING,
 * isFetching: boolean
 * }
 */

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
});

export const setRefreshToken = refreshToken => ({
  type: SET_REFRESH_TOKEN,
  payload: { refreshToken },
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: { token },
});

/**
 * Thunks. Вся асинхронщина тут.
 */

/**
 * @function loginUserThunk
 *
 * @param {String} login
 * @param {String} password
 */

export const loginUserThunk = ({ login, password }) => async dispatch => {
  dispatch(setIsFetching(true));
  const res = await Axios.post('./api/login', {
    login,
    password,
  });
  dispatch(setIsFetching(false));

  if (res.status === 200) {
    dispatch(setIsAuth(true));
    const { refreshToken, token } = res.data;
    dispatch(setRefreshToken(refreshToken));
    dispatch(setToken(token));
  }
};

export const getAuthUserDataThunk = (time = 8000) => async dispatch => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  dispatch(setIsFetching(true));
  await sleep(time);
  console.log('getAuthUserDataThunk');
  dispatch(setIsFetching(false));

  dispatch(setIsAuth(true));
};

export default authReducer;
