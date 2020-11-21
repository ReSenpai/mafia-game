import { sleep } from './../../utils/helpers/timers/timers';
import getInitialGame, {
  IGetInitialGame,
} from './../../utils/helpers/date_generators/initial_game_generator';
import {
  IInitialState,
  ISetGamesList,
  ISetIsFetching,
  TActions,
  ThunkType,
} from './types';

export const SET_IS_FETCHING = 'game/SET_IS_FETCHING';
export const SET_GAMES_LIST = 'game/SET_GAMES_LIST';

const initialState: IInitialState = {
  lobby: [],
  isFetching: false,
  theme: {},
};

const gameReducer = (state = initialState, action: TActions): IInitialState => {
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

/**
 * Adds a copy of the game room to the store
 * @param lobby
 */
export const setGamesList = (lobby: Array<IGetInitialGame>): ISetGamesList => ({
  type: SET_GAMES_LIST,
  lobby,
});
/**
 * Download status switch
 */
export const setIsFetching = (isFetching: boolean): ISetIsFetching => ({
  type: SET_IS_FETCHING,
  isFetching,
});

/**
 * Get data from the server and add to the store
 * @param page
 */
export const getGameListThunk = (page = 0): ThunkType => async dispatch => {
  dispatch(setIsFetching(true));
  await sleep(1 * 1e3);

  const games = Array(10).fill(null).map(getInitialGame);

  dispatch(setGamesList(games));
  dispatch(setIsFetching(false));
};

export default gameReducer;
