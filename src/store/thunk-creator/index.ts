import { Dispatch } from 'redux';
import getNasaImages from '../../service/nasa.service';
import { IAPOD } from '../../type';
import {
  fetchNasaAction,
  getNasaImageError,
  getNasaImageResults,
} from '../action-creator';

export const fetchNasaImages = () => async (dispatch: Dispatch<fetchNasaAction>): Promise<void> => {
  try {
    console.log('FETCHING API');
    const data: IAPOD[] = await getNasaImages();
    dispatch(getNasaImageResults(data));
  } catch (err) {
    dispatch(getNasaImageError());
  }
};
