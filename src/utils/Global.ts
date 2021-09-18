import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 1rem;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  main {
    width: 100%;
    margin: 0 auto;
  }
`;
