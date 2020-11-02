import { combineReducers } from 'redux'
import authReducer from './auth_reducer';

/**
 * Connect the reducers here
 */

export default combineReducers({
  Auth: authReducer,
});
