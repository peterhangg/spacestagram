import styled from 'styled-components';

export const PageLayoutStyles = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  overflow-y: scroll;
`;
