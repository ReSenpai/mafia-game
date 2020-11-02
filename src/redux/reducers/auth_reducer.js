// Небольшой шаблон, как примерно пишутся редьюсеры, экшены, санки.

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';
// const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
  captcha: null,
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
        isAuth: !state.isAuth
      }
    }
    default:
      return state;
  }
};

/**
 * Actions
 */

// хз как лучше типы описывать, но в редьюсерах совсем без них будет боль, мб их на тс писать?

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

export const setIsAuth = (isAuth = true) => ({
  type: SET_IS_AUTH,
  isAuth
})

/**
 * Thunks. Вся асинхронщина тут.
 */

export const getAuthUserDataThunk = () => async (dispatch) => {
  dispatch()
};

export default authReducer;
