import { Dispatch, SetStateAction } from 'react';

export interface IAPOD {
  copyright?: string | null
  date: string
  explanation: string
  hdurl?: string | null
  media_type: string
  service_version: string
  title: string
  url: string
}

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;
export * from './actionTypes';
export * from './stylesTypes';
