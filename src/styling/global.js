import { createGlobalStyle } from 'styled-components';
import FoundryGridnikWoff2 from '../res/fonts/regular/Foundry-Gridnik-Regular.woff2';
import FoundryGridnikWoff from '../res/fonts/regular/Foundry-Gridnik-Regular.woff';
import FoundryGridnikBoldWoff2 from '../res/fonts/bold/Foundry-Gridnik-Bold.woff2';
import FoundryGridnikBoldWoff from '../res/fonts/bold/Foundry-Gridnik-Bold.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Affogato Regular';
    src: url(${FoundryGridnikWoff}) format('woff'),
      url(${FoundryGridnikWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Affogato Bold';
    src: url(${FoundryGridnikBoldWoff}) format('woff'),
      url(${FoundryGridnikBoldWoff2}) format('woff2');
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
    margin: 0;
  }  
`;

export default GlobalStyles;
