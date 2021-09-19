import { ADD_IMAGE_TO_LIKED, REMOVE_IMAGE_FROM_LIKED } from '../constants';
import { ILikedImageState, LikeImageAction } from '../../types';

const initialState: ILikedImageState = {
  likedImages: [],
};

const likedImageReducer = (state = initialState, action: LikeImageAction): ILikedImageState => {
  switch (action.type) {
    case ADD_IMAGE_TO_LIKED:
      return { ...state, likedImages: [...state.likedImages, action.payload] };
    case REMOVE_IMAGE_FROM_LIKED:
      return {
        ...state,
        likedImages: state.likedImages.filter((likedImage) => likedImage !== action.payload),
      };
    default:
      return state;
  }
};

export default likedImageReducer;
