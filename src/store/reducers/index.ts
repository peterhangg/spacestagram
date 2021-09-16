import { combineReducers } from 'redux';
import nasaImageReducer from './nasaImageReducer';

const rootReducer = combineReducers({
  apiData: nasaImageReducer,
});

export type State = ReturnType<typeof rootReducer>
export default rootReducer;
