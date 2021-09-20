import * as React from 'react';
import { useSelector } from 'react-redux';
import CardList from '../../components/CardList';
import EmptyLikes from '../../components/EmptyLikes';
import PageLayout from '../../components/PageLayout';
import { State } from '../../store';

const Liked: React.FC = () => {
  const likedImages = useSelector((state: State) => state.likedImageData?.likedImages);
  return (
    <PageLayout>
      {likedImages.length === 0 && <EmptyLikes />}
      <CardList nasaImageData={likedImages} />
    </PageLayout>
  );
};

export default Liked;
