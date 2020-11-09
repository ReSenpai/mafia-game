import { IAction } from 'src/types/index';
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
  const id = Math.random();
  const size = (5 + id * 20) ^ 0;

  return {
    id,
    name: 'Game name ' + ((id * 1000) ^ 0),
    date: new Date(),
    size,
    players: [
      {
        name: 'Lupusregina[beta]',
        id: Math.random(),
      },
      {
        name: 'Den Ri',
        id: Math.random(),
      },
      {
        name: 'Зомби Ich bin Roboter',
        id: Math.random(),
      },
      {
        name: 'Bunk Bunkovich',
        id: Math.random(),
      },
      {
        name: 'Aleksander irreligious86',
        id: Math.random(),
      },
      {
        name: 'Anton Miroshnichenko',
        id: Math.random(),
      },
      {
        name: 'Ilya Kozyura',
        id: Math.random(),
      },
      {
        name: 'Chingiz Mamyev',
        id: Math.random(),
      },
      {
        name: 'pacificescape',
        id: Math.random(),
      },
    ].slice(0, size),
    status: 9 < size ? 1 : 0, // 1 - open, 0 -- close ???
  };
};

interface IInitialState {
  lobby: [];
  currentGame: Record<string, unknown>;
  theme: Record<string, unknown>;
}
const initialState: IInitialState = {
  lobby: [],
  currentGame: {},
  theme: {},
};

const gameReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_GAMES_LIST: {
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

export const setGamesList = (lobby: any): IAction => ({
  type: SET_GAMES_LIST,
  payload: { lobby },
});

export const setIsFetching = (isFetching: boolean): IAction => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
});

/**
 * Thunks. Вся асинхронщина тут.
 */

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const getGameListThunk = (page = 0) => async (
  dispatch: any,
): Promise<void> => {
  dispatch(setIsFetching(true));
  await sleep(1 * 1e3);

  const games = Array(10).fill(null).map(getInitialGame);

  dispatch(setGamesList(games));
  dispatch(setIsFetching(false));
};

export default gameReducer;
