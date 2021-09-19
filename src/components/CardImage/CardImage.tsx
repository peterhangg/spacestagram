import * as React from 'react';
import LikeAnimate from '../LikeAnimate';
import { ImageContainer, CardImageStyles } from './styles';

interface CardImageProps {
  cardImageSrc: string;
  cardImageTitle: string;
  liked: boolean;
}

const CardImage: React.FC<CardImageProps> = ({ cardImageSrc, cardImageTitle, liked }) => (
  <ImageContainer>
    <CardImageStyles src={cardImageSrc} alt={cardImageTitle} />
    <LikeAnimate liked={liked} />
  </ImageContainer>
);

export default CardImage;
