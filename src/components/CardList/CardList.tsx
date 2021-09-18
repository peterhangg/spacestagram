import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { fetchNasaImages } from '../../store/thunk-creator';
import Card from '../Card';

const CardListStyles = styled.ul`
  list-style: none;
  padding: 10px;
  height: 100%;
`;

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
