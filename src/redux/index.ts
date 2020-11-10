import { combineReducers } from 'redux';
import authReducer from './Auth/auth_reducer';
import gamesReducer from './Game/game_reducer';
import chatReducer from './Chat/chat_reducer';

/**
 * Connect the reducers here
 */

const rootReducer = combineReducers({
  Auth: authReducer,
  Game: gamesReducer,
  Chat: chatReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
