import styled, { keyframes } from 'styled-components';
import { FadeProps } from '../../types';

export const LikeAnimateContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1.5);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    transform: scale(1.5);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const Fade = styled.div<FadeProps>`
  visibility: ${(props) => (props.$in ? 'visible' : 'hidden')};
  animation: ${(props) => (props.$in ? fadeIn : fadeOut)} 1s linear;
  transition: visibility 1s linear;
`;
