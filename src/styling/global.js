import { createGlobalStyle } from 'styled-components';
import FoundryGridnikWoff2 from '../res/fonts/regular/Foundry-Gridnik-Regular.woff2';
import FoundryGridnikWoff from '../res/fonts/regular/Foundry-Gridnik-Regular.woff';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Affogato Regular';
    src: url(${FoundryGridnikWoff}) format('woff'),
      url(${FoundryGridnikWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: Affogato Regular;
    font-weight: 400;
    font-size: 1.8em;
  }  
`;
