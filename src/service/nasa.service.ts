import axios from 'axios';
import { IAPOD } from '../type';

const getNasaImages = async (): Promise<IAPOD[]> => {
  const response = await axios.get(process.env.REACT_APP_API_URL as string);

  if (response.status !== 200) {
    throw new Error('Something went wrong on fetch!');
  }
  const data: IAPOD[] = await response.data;
  return data;
};

export default getNasaImages;
