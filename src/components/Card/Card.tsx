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
import Toast from '../Toast';

interface CardProps {
  nasaImage: IAPOD,
}

const Card: React.FC<CardProps> = ({ nasaImage }) => {
  const likedImages = useSelector((state: State) => state.likedImageData.likedImages);
  const likedStatus = likedImages.includes(nasaImage);
  const [liked, setLiked] = React.useState<boolean>(likedStatus);
  const [copied, setCopied] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const handleLiked = (): void => {
    if (!liked) {
      dispatch(addImageToLiked(nasaImage));
    } else {
      dispatch(removeImageFromLiked(nasaImage));
    }
    setLiked(!liked);
  };
  const handleCopyToClipboard = (): void => {
    setCopied(true);
    navigator.clipboard.writeText(nasaImage.url);
  };
  return (
    <CardStyles>
      <CardHeader />
      <CardImage cardImageSrc={nasaImage.url} cardImageTitle={nasaImage.title} liked={liked} />
      <CardButtonContainer>
        <CardButton type="button" aria-label="Like post" onClick={handleLiked}>
          <img src={liked ? RedHeart : Heart} alt="heart icon" />
        </CardButton>
        <CardButton aria-label="Share link" type="button" onClick={handleCopyToClipboard}>
          <img src={ShareIcon} alt="share icon" />
        </CardButton>
      </CardButtonContainer>
      <CardContent
        cardTitle={nasaImage.title}
        cardDate={nasaImage.date}
        cardSummary={nasaImage.explanation}
      />
      <Toast copied={copied} setCopied={setCopied} />
    </CardStyles>
  );
};

export default Card;
