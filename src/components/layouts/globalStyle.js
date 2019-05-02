import { createGlobalStyle } from 'styled-components';
import { theme } from 'bitcoincom-storybook';
import gilroyMediumEOT from '../../assets/fonts/gilroy/Gilroy-Medium.eot';
import gilroyMediumWOFF2 from '../../assets/fonts/gilroy/Gilroy-Medium.woff2';
import gilroyMediumWOFF from '../../assets/fonts/gilroy/Gilroy-Medium.woff';
import gilroyMediumTTF from '../../assets/fonts/gilroy/Gilroy-Medium.ttf';
import gilroyMediumSVG from '../../assets/fonts/gilroy/Gilroy-Medium.svg';
import gilroySemiBoldEOT from '../../assets/fonts/gilroy/Gilroy-SemiBold.eot';
import gilroySemiBoldWOFF2 from '../../assets/fonts/gilroy/Gilroy-SemiBold.woff2';
import gilroySemiBoldWOFF from '../../assets/fonts/gilroy/Gilroy-SemiBold.woff';
import gilroySemiBoldTTF from '../../assets/fonts/gilroy/Gilroy-SemiBold.ttf';
import gilroySemiBoldSVG from '../../assets/fonts/gilroy/Gilroy-SemiBold.svg';
import gilroyBoldEOT from '../../assets/fonts/gilroy/Gilroy-Bold.eot';
import gilroyBoldWOFF2 from '../../assets/fonts/gilroy/Gilroy-Bold.woff2';
import gilroyBoldWOFF from '../../assets/fonts/gilroy/Gilroy-Bold.woff';
import gilroyBoldTTF from '../../assets/fonts/gilroy/Gilroy-Bold.ttf';
import gilroyBoldSVG from '../../assets/fonts/gilroy/Gilroy-Bold.svg';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gilroy";
    src: url("${gilroyMediumEOT}");
    src: url("${gilroyMediumEOT}?#iefix") format("embedded-opentype"),
      url("${gilroyMediumWOFF2}") format("woff2"),
      url("${gilroyMediumWOFF}") format("woff"),
      url("${gilroyMediumTTF}") format("ttf"),
      url("${gilroyMediumSVG}#Gilroy-Medium") format("svg");
    font-style: normal;
    font-weight: normal;
    font-display: fallback; /* <- this can be added to each @font-face definition */

  }

  @font-face {
    font-family: "Gilroy";
    src: url("${gilroySemiBoldEOT}");
    src: url("${gilroySemiBoldEOT}?#iefix") format("embedded-opentype"),
      url("${gilroySemiBoldWOFF2}") format("woff2"),
      url("${gilroySemiBoldWOFF}") format("woff"),
      url("${gilroySemiBoldTTF}") format("ttf"),
      url("${gilroySemiBoldSVG}#Gilroy-SemiBold") format("svg");
    font-style: normal;
    font-weight: 600;
    font-display: fallback; /* <- this can be added to each @font-face definition */

  }

  @font-face {
    font-family: "Gilroy";
    src: url("${gilroyBoldEOT}");
    src: url("${gilroyBoldEOT}?#iefix") format("embedded-opentype"),
      url("${gilroyBoldWOFF2}") format("woff2"),
      url("${gilroyBoldWOFF}") format("woff"),
      url("${gilroyBoldTTF}") format("ttf"),
      url("${gilroyBoldSVG}#Gilroy-Bold") format("svg");
    font-style: normal;
    font-weight: 700;
    font-display: fallback; /* <- this can be added to each @font-face definition */

  }

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
