import { Dispatch } from 'redux';
import getNasaImages from '../../service/nasa.service';
import { fetchNasaAction, IAPOD } from '../../types';
import {
  initGetNasaImage,
  getNasaImageError,
  getNasaImageResults,
} from '../action-creator';

export const fetchNasaImages = () => async (dispatch: Dispatch<fetchNasaAction>): Promise<void> => {
  try {
    dispatch(initGetNasaImage());
    const data: IAPOD[] = await getNasaImages();
    dispatch(getNasaImageResults(data));
  } catch (err) {
    dispatch(getNasaImageError());
  }
};
