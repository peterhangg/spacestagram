import * as React from 'react';
import { ImageContainer, CardImageStyles } from './styles';

interface CardImageProps {
  CardImageSrc: string;
  CardImageTitle: string;
}

const CardImage: React.FC<CardImageProps> = ({ CardImageSrc, CardImageTitle }) => (
  <ImageContainer>
    <CardImageStyles src={CardImageSrc} alt={CardImageTitle} />
  </ImageContainer>
);

export default CardImage;
