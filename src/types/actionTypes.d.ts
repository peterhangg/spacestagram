import { Action } from 'redux';
import { IAPOD } from '.';

export interface INasaImageState {
  nasaImages: IAPOD[]
  loading: boolean
  error: boolean
}

export interface ILikedImageState {
  likedImages: IAPOD[]
}

export interface IGetNasaImageSuccess extends Action {
  type: 'GET_NASA_IMAGE_SUCCESS'
  payload: IAPOD[]
}

export interface IGetNasaImageError extends Action {
  type: 'GET_NASA_IMAGE_ERROR'
}

export interface IAddToLiked extends Action {
  type: 'ADD_IMAGE_TO_LIKED'
  payload: IAPOD
}
export interface IRemoveFromLiked extends Action {
  type: 'REMOVE_IMAGE_FROM_LIKED'
  payload: IAPOD
}

export type fetchNasaAction = IGetNasaImageSuccess| IGetNasaImageError;

export type LikeImageAction = IAddToLiked | IRemoveFromLiked;
