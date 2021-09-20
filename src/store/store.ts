import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import persistedReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  storeEnhancers(applyMiddleware(thunk)),
);
