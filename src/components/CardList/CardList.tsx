import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchNasaImages } from '../../store/thunk-creator';
import { IAPOD } from '../../types';
import Card from '../Card';
import { CardListStyles, CardContainer } from './styles';

interface CardListProps {
  nasaImageData: IAPOD[];
  fromAPI?: boolean;
}

const CardList: React.FC<CardListProps> = ({ nasaImageData, fromAPI }) => {
  const cardContainerRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const target = e.target as Element;
    const bottom = target.scrollHeight - target.scrollTop === target.clientHeight;
    if (bottom && fromAPI) {
      dispatch(fetchNasaImages());
    }
  };
  return (
    <CardContainer ref={cardContainerRef} onScroll={handleScroll}>
      <CardListStyles>
        {nasaImageData.map((nasaImage) => (
          <Card key={nasaImage.title} nasaImage={nasaImage} />
        ))}
      </CardListStyles>
    </CardContainer>
  );
};

CardList.defaultProps = {
  fromAPI: false,
};

export default CardList;
