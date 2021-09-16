import { Action } from 'redux';
import { IAPOD } from '../../type';
import {
  GET_NASA_IMAGE_ERROR,
  GET_NASA_IMAGE_SUCCESS,
} from '../constants';

export interface IGetNasaImageSuccess extends Action {
  type: 'GET_NASA_IMAGE_SUCCESS'
  payload: IAPOD[]
}

export interface IGetNasaImageError extends Action {
  type: 'GET_NASA_IMAGE_ERROR'
}

export type fetchNasaAction =
  | IGetNasaImageSuccess
  | IGetNasaImageError

export const getNasaImageResults = (
  payload: IAPOD[],
): IGetNasaImageSuccess => ({
  type: GET_NASA_IMAGE_SUCCESS,
  payload,
});

export const getNasaImageError = (): IGetNasaImageError => ({
  type: GET_NASA_IMAGE_ERROR,
});
