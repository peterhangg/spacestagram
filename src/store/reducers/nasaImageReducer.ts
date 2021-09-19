import { fetchNasaAction, INasaImageState } from '../../types';
import {
  GET_NASA_IMAGE_SUCCESS,
  GET_NASA_IMAGE_ERROR,
} from '../constants';

const initialState: INasaImageState = {
  nasaImages: [],
  loading: true,
  error: false,
};

const nasaImageReducer = (state = initialState, action: fetchNasaAction): INasaImageState => {
  switch (action.type) {
    case GET_NASA_IMAGE_SUCCESS:
      return { ...state, nasaImages: state.nasaImages.concat(action.payload), loading: false };
    case GET_NASA_IMAGE_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default nasaImageReducer;
