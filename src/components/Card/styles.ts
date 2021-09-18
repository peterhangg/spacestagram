import styled from 'styled-components';
import { HeaderContainer } from '../CardHeader/styles';

export const CardStyles = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

export const CardButtonContainer = styled(HeaderContainer)`
  padding: 5px;
`;

export const CardButton = styled.button`
  background-color: #ffffff;
  outline: none;
  border:none;
`;
