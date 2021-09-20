import styled from 'styled-components';
import { ToastStylesProps } from '../../types';

export const ToastContainer = styled.div<ToastStylesProps>`
  position: absolute;
  display: flex;
  align-items: center;
  top: 61px;
  right: 0px;
  z-index: 1000;
  transition: transform 0.5s ease;
  background-color: #96BF48;
  padding: 10px;
  border-radius: 5px;
  transform: ${(props) => props.showToast};
  -webkit-transform: ${(props) => props.showToast};
`;

export const ToastText = styled.p`
  font-size: clamp(0.80rem, 1vw, 1rem);
  color: #ffffff;
`;

export const CloseToastButton = styled.button`
  position: absolute;
  color: #ffffff;
  background: none;
  border: none;
  outline: none;
  top: 5px;
  right: 5px;
  height: 15px;
  width: 15px;
  padding: 0;
  cursor: pointer;
  font-weight: bolder;

  &:hover {
    color: #000000;
  }
`;
