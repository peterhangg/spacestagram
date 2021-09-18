import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNasaImages } from './store/thunk-creator';
import { State } from './store/reducers';
import './App.css';
import Card from './components/Card';

const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNasaImages());
  }, [dispatch]);
  const nasaImages = useSelector((state: State) => state.apiData.nasaImages);
  return (
    <div className="App">
      {nasaImages.map((nasaImage) => (
        <Card key={nasaImage.title} nasaImage={nasaImage} />
      ))}
    </div>
  );
};

export default App;
