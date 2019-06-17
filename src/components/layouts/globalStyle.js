import { createGlobalStyle } from 'styled-components';
import { theme } from 'bitcoincom-storybook';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  html,
  body,
  ___gatsby,
  ___gatsby > div {
    font-family: ${theme.typography.fontFamily};
    margin: 0;
    padding: 0;
    color: ${theme.palette.text.primary};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    @media screen and (min-width: ${theme.breakpoints.md}px) {
      font-size: 20px;
    }
  }
`;
