import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../../components/CardList';
import PageLayout from '../../components/PageLayout';
import { State } from '../../store';
import { fetchNasaImages } from '../../store/thunk-creator';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNasaImages());
  }, [dispatch]);
  const nasaImages = useSelector((state: State) => state.apiData.nasaImages);
  const loading = useSelector((state: State) => state.apiData.loading);
  if (loading) {
    return (
      <PageLayout>
        <p>loading...</p>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <CardList nasaImageData={nasaImages} />
    </PageLayout>
  );
};

export default Home;