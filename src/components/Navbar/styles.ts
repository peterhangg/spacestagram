import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { logoFont } from '../../utils/typography';

export const NavStyles = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  z-index: 1000;
  height: 3vh;
  min-height: 55px;
  border-bottom: 1px solid #d3d3d3;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${logoFont};
`;

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #000000;
  outline: none;
`;
