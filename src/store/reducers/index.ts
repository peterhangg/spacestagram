import { combineReducers } from 'redux';
import likedImageReducer from './likedImageReducer';
import nasaImageReducer from './nasaImageReducer';

const rootReducer = combineReducers({
  apiData: nasaImageReducer,
  likedImageData: likedImageReducer,
});

export type State = ReturnType<typeof rootReducer>
export default rootReducer;
