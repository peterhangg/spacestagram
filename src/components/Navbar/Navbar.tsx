import * as React from 'react';
import RedHeart from '../../assets/red-heart.png';
import { NavLink, NavStyles } from './styles';

const Navbar: React.FC = () => (
  <NavStyles>
    <NavLink to="/" aria-label="App logo">Spacestagram</NavLink>
    <NavLink to="/liked" aria-label="Heart icon">
      <img src={RedHeart} alt="Red heart" />
    </NavLink>
  </NavStyles>
);

export default Navbar;
