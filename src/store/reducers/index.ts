import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import likedImageReducer from './likedImageReducer';
import nasaImageReducer from './nasaImageReducer';

export const rootConfig = {
  key: 'root',
  storage,
  blacklist: ['apiData'],
};

const rootReducer = combineReducers({
  apiData: nasaImageReducer,
  likedImageData: likedImageReducer,
});

export type State = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer<State>(rootConfig, rootReducer);
export default persistedReducer;
