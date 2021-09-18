import styled from 'styled-components';
import { HeaderContainer } from '../CardHeader/styles';

export const CardStyles = styled.li`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
  margin-bottom: 15px;
`;

export const CardButtonContainer = styled(HeaderContainer)`
  padding: 5px;
`;

export const CardButton = styled.button`
  background-color: #ffffff;
  outline: none;
  border:none;
`;
