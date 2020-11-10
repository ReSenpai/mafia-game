import { EThemeType } from './../../hooks/withTheme';
import getInitialGame, {
  IGetInitialGame,
} from './../../utils/helpers/date_generators/initial_game_generator';
import { ISetGamesList, ISetIsFetching, TActions, ThunkType } from './types';
export const SET_IS_FETCHING = 'game/SET_IS_FETCHING';
export const SET_GAMES_LIST = 'game/SET_GAMES_LIST';

const initialState = {
  lobby: [] as Array<IGetInitialGame>,
  isFetching: false as boolean,
  theme: {} as Record<string, unknown>
};

type InitialStateType = typeof initialState;

const gameReducer = (
  state = initialState,
  action: TActions,
): InitialStateType => {
  switch (action.type) {
    case SET_GAMES_LIST: {
      return {
        ...state,
        lobby: [...state.lobby, ...action.lobby],
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

export const setGamesList = (lobby: Array<IGetInitialGame>): ISetGamesList => ({
  type: SET_GAMES_LIST,
  lobby,
});

export const setIsFetching = (isFetching: boolean): ISetIsFetching => ({
  type: SET_IS_FETCHING,
  isFetching,
});

// Thunks

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const getGameListThunk = (page = 0): ThunkType => async dispatch => {
  dispatch(setIsFetching(true));
  await sleep(1 * 1e3);

  const games = Array(10).fill(null).map(getInitialGame);

  dispatch(setGamesList(games));
  dispatch(setIsFetching(false));
};

export default gameReducer;
