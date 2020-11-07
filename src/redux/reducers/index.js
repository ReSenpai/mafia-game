import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import chatReducer from './chat_reducer';

/**
 * Connect the reducers here
 */

export default combineReducers({
  Auth: authReducer,
  Chat: chatReducer
});
