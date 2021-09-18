import * as React from 'react';
import { IAPOD } from '../../type';
import Card from '../Card';
import { CardListStyles } from './styles';

interface CardListProps {
  NasaImageData: IAPOD[];
}

const CardList: React.FC<CardListProps> = ({ NasaImageData }) => (
  <CardListStyles>
    {NasaImageData.map((nasaImage) => (
      <Card key={nasaImage.title} nasaImage={nasaImage} />
    ))}
  </CardListStyles>
);

export default CardList;
