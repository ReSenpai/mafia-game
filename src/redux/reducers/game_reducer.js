// Небольшой шаблон, как примерно пишутся редьюсеры, экшены, санки.

const SET_USER_DATA = 'game/SET_USER_DATA';
const SET_IS_FETCHING = 'game/SET_IS_FETCHING';
const SET_GAMES_LIST = 'game/SET_GAMES_LIST';

// const SET_CAPTCHA = 'auth/SET_CAPTCHA';

/**
 * Game = {
 *
 * }
 */

const getInitialGame = () => {
  const id = Math.random()
  const size = 5 + id * 20 ^ 0

  return {
    id,
    name: 'Game name ' + (id * 1000 ^ 0),
    date: new Date(),
    size,
    players: [
    {
      name: 'Lupusregina[beta]',
      id: Math.random()
    },
    {
      name: 'Den Ri',
      id: Math.random()
    },
    {
      name: 'Зомби Ich bin Roboter',
      id: Math.random()
    },
    {
      name: 'Bunk Bunkovich',
      id: Math.random()
    },
    {
      name: 'Aleksander irreligious86',
      id: Math.random()
    },
    {
      name: 'Anton Miroshnichenko',
      id: Math.random()
    },
    {
      name: 'Ilya Kozyura',
      id: Math.random()
    },
    {
      name: 'Chingiz Mamyev',
      id: Math.random()
    },
    {
      name: 'pacificescape',
      id: Math.random()
    }
  ].slice(0, size),
  status: 9 < size ? 1 : 0 // 1 - open, 0 -- close ???
}}

let initialState = {
  lobby: [],
  currentGame: {}
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES_LIST: {
      return {
        ... state,
        ... action.payload
      }
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
 * type: typeof SET_GAMES_LIST,
 * isAuth: boolean
 * }
 */

export const setGamesList = lobby => ({
  type: SET_GAMES_LIST,
  payload: { lobby },
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

/**
 * Thunks. Вся асинхронщина тут.
 */

const sleep = ms => new Promise(r => setTimeout(r, ms));

export const getGameListThunk = (page = 0) => async dispatch => {
  dispatch(setIsFetching(true));
  await sleep(1 * 1e3)

  const games = Array(10).fill(null).map(getInitialGame)

  dispatch(setGamesList(games))
  dispatch(setIsFetching(false));
}

export default gameReducer;
