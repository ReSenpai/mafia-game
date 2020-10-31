// Небольшой шаблон, как примерно пишуться редьюсеры, экшены, санки.

const SET_USER_DATA = 'auth/SET_USER_DATA';
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
    default:
      return state;
  }
};
/**
 * Actions
 */
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

/**
 * Thunks. Вся асинхронщина тут.
 */
export const getAuthUserData = () => async () => {
  console.log('thunk here');
};

export default authReducer;
