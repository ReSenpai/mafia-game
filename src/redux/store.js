import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth_reducer";


/**
 * Connect the reducers here
 */
const rootReducer = combineReducers({
    auth: authReducer
});


/**
 * Develop tool helper.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;