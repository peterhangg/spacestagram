import React from 'react';
import './App.css';
import { GlobalStyle } from './utils/Global';
import CardList from './components/CardList';

const App: React.FC = () => (
  <div className="App">
    <GlobalStyle />
    <CardList />
  </div>
);

export default App;
