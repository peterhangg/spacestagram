import React from 'react';
import './App.css';
import { GlobalStyle } from './utils/Global';
import CardList from './components/CardList';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <div className="App">
    <GlobalStyle />
    <Navbar />
    <CardList />
  </div>
);

export default App;
