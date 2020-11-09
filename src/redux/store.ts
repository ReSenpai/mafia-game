import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Develop tool helper.
 */

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
