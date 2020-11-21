import { IGetInitialGame } from './../../utils/helpers/date_generators/initial_game_generator';
import gameReducer, { setGamesList, setIsFetching } from './game_reducer';
import { IInitialState } from './types';

// test state

const state: IInitialState = {
  lobby: [],
  isFetching: false,
  theme: {},
};

describe('Actions into reducer', () => {
  let game: IGetInitialGame;
  let games: Array<IGetInitialGame>;

  describe('setGamesList', () => {
    beforeEach(() => {
      game = {
        id: 1,
        name: '123',
        date: new Date(),
        size: 14,
        players: [
          { name: 'Den Ri', id: 234235 },
          { name: 'Alex Kovalev', id: 123256 },
        ],
        status: 0,
      };
      games = [game];
    });
    const setGameListAction = () => gameReducer(state, setGamesList(games));

    test('Length of the lobby should increase', () => {
      expect(setGameListAction().lobby.length).toBeGreaterThan(0);
    });
    test('lobby should be defined', () => {
      expect(setGameListAction().lobby[0].name).toBeDefined();
    });
    test('lobby value should be correct', () => {
      expect(setGameListAction().lobby[0].name).toBe('123');
    });
    test('Length of the lobby should be correct', () => {
      expect(setGameListAction().lobby.length).toBe(1);
    });
  });

  describe('setIsFetching', () => {
    const setIsFetchingAction = (boolean: boolean) =>
      gameReducer(state, setIsFetching(boolean));

    test('isFetching should be defined', () => {
      expect(setIsFetchingAction(true).isFetching).toBeDefined();
    });
    test('isFetching should be true', () => {
      expect(setIsFetchingAction(true).isFetching).toBe(true);
    });
    test('isFetching should be false', () => {
      expect(setIsFetchingAction(false).isFetching).toBe(false);
    });
  });
});
