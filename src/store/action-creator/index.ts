import {
  IAddToLiked,
  IAPOD,
  IInitGetNasaImage,
  IGetNasaImageError,
  IGetNasaImageSuccess,
  IRemoveFromLiked,
} from '../../types';
import {
  GET_NASA_IMAGE_PENDING,
  GET_NASA_IMAGE_SUCCESS,
  GET_NASA_IMAGE_ERROR,
  ADD_IMAGE_TO_LIKED,
  REMOVE_IMAGE_FROM_LIKED,
} from '../constants';

export const getNasaImageResults = (
  payload: IAPOD[],
): IGetNasaImageSuccess => ({
  type: GET_NASA_IMAGE_SUCCESS,
  payload,
});

export const initGetNasaImage = (): IInitGetNasaImage => ({
  type: GET_NASA_IMAGE_PENDING,
});

export const getNasaImageError = (): IGetNasaImageError => ({
  type: GET_NASA_IMAGE_ERROR,
});

export const addImageToLiked = (payload: IAPOD): IAddToLiked => ({
  type: ADD_IMAGE_TO_LIKED,
  payload,
});

export const removeImageFromLiked = (payload: IAPOD): IRemoveFromLiked => ({
  type: REMOVE_IMAGE_FROM_LIKED,
  payload,
});
