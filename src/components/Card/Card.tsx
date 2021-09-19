import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAPOD } from '../../types';
import {
  CardButton,
  CardButtonContainer,
  CardStyles,
} from './styles';
import Heart from '../../assets/heart.png';
import RedHeart from '../../assets/red-heart.png';
import ShareIcon from '../../assets/share.png';
import CardHeader from '../CardHeader';
import CardImage from '../CardImage';
import CardContent from '../CardContent';
import { addImageToLiked, removeImageFromLiked, State } from '../../store';

interface CardProps {
  nasaImage: IAPOD,
}

const Card: React.FC<CardProps> = ({ nasaImage }) => {
  const likedImages = useSelector((state: State) => state.likedImageData.likedImages);
  const likedStatus = likedImages.includes(nasaImage);
  const [liked, setLiked] = React.useState<boolean>(likedStatus);
  const dispatch = useDispatch();
  const handleLiked = (): void => {
    if (!liked) {
      dispatch(addImageToLiked(nasaImage));
    } else {
      dispatch(removeImageFromLiked(nasaImage));
    }
    setLiked(!liked);
  };
  return (
    <CardStyles>
      <CardHeader />
      <CardImage CardImageSrc={nasaImage.url} CardImageTitle={nasaImage.title} />
      <CardButtonContainer>
        <CardButton type="button" aria-label="Like post" onClick={handleLiked}>
          <img src={liked ? RedHeart : Heart} alt="heart icon" />
        </CardButton>
        <CardButton aria-label="Share link" type="button">
          <img src={ShareIcon} alt="share icon" />
        </CardButton>
      </CardButtonContainer>
      <CardContent
        CardTitle={nasaImage.title}
        CardDate={nasaImage.date}
        CardSummary={nasaImage.explanation}
      />
    </CardStyles>
  );
};

export default Card;
