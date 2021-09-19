import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../../components/CardList';
import Loader from '../../components/Loader';
import PageLayout from '../../components/PageLayout';
import { State } from '../../store';
import { fetchNasaImages } from '../../store/thunk-creator';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNasaImages());
  }, [dispatch]);
  const nasaImages = useSelector((state: State) => state.apiData?.nasaImages);
  const loading = useSelector((state: State) => state.apiData?.loading);
  return (
    <PageLayout>
      {loading && <Loader />}
      {nasaImages && <CardList nasaImageData={nasaImages} fromAPI />}
    </PageLayout>
  );
};

export default Home;
