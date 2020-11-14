import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '..';
import { IGetInitialGame } from './../../utils/helpers/date_generators/initial_game_generator';
import { SET_GAMES_LIST, SET_IS_FETCHING } from './game_reducer';

export interface IInitialState {
  lobby: Array<IGetInitialGame>;
  isFetching: boolean,
  theme: Record<string, unknown>,
}

export interface ISetGamesList {
  type: typeof SET_GAMES_LIST;
  lobby: Array<IGetInitialGame>;
}

export interface ISetIsFetching {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
}

export type TActions = ISetGamesList | ISetIsFetching;
export type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  TActions
>;
