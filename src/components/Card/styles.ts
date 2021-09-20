import styled, { keyframes } from 'styled-components';
import { HeaderContainer } from '../CardHeader/styles';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

export const CardStyles = styled.li`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
  margin-bottom: 20px;
  background-color: #ffffff;
  animation: 0.75s ${FadeIn} ease-in;
  position: relative;
  overflow: hidden;
`;

export const CardButtonContainer = styled(HeaderContainer)`
  padding: 5px;
  border: none;
`;

export const CardButton = styled.button`
  background-color: #ffffff;
  outline: none;
  border:none;
`;
