import * as React from 'react';
import { IAPOD } from '../../types';
import Card from '../Card';
import { CardListStyles } from './styles';

interface CardListProps {
  nasaImageData: IAPOD[];
}

const CardList: React.FC<CardListProps> = ({ nasaImageData }) => (
  <CardListStyles>
    {nasaImageData && nasaImageData.map((nasaImage) => (
      <Card key={nasaImage.title} nasaImage={nasaImage} />
    ))}
  </CardListStyles>
);

export default CardList;
