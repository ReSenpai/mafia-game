import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import gamesReducer from './game_reducer';

/**
 * Connect the reducers here
 */

export default combineReducers({
  Auth: authReducer,
  Game: gamesReducer,
});
