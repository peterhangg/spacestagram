import styled, { keyframes } from 'styled-components';
import { DotProps } from '../../types';

export const LoaderOverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 20px }
  100% { margin-bottom: 0 }
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: flex-end;
  z-index: 1000;
`;

export const Dot = styled.div<DotProps>`
  background-color: #000000;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
