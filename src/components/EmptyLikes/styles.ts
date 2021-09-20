import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EmptyLikesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  height: 350px;
  max-width: 400px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Text = styled.p`
  font-weight: bold;
`;

export const LinkStyles = styled(Link)`
  color: #3d3d3d;
  font-size: 1rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
