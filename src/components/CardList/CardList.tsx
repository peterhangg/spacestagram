import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { fetchNasaImages } from '../../store/thunk-creator';
import Card from '../Card';
import { CardListStyles } from './styles';

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNasaImages());
  }, [dispatch]);
  const nasaImages = useSelector((state: State) => state.apiData.nasaImages);
  return (
    <CardListStyles>
      {nasaImages.map((nasaImage) => (
        <Card key={nasaImage.title} nasaImage={nasaImage} />
      ))}
    </CardListStyles>
  );
};

export default CardList;
