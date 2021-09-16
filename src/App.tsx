import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNasaImages } from './store/thunk-creator';
import { State } from './store/reducers';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNasaImages());
  }, [dispatch]);
  const nasaImages = useSelector((state: State) => state.apiData.nasaImages);
  return (
    <div className="App">
      {nasaImages.map((nasaImage) => (
        <div key={nasaImage.title}>
          <img src={nasaImage.url} alt={nasaImage.title} />
        </div>
      ))}
    </div>
  );
};

export default App;
