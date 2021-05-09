// @flow
// Add Top margin to elements for use in markdown;

import styled from 'styled-components';

import spacing from 'styles/spacing';
import { H1, H2, H3, UL, OL } from '@bitcoin-portal/bitcoincom-storybook';
import H4 from './H4';
import Text from './Text';
import Img from './Img';

const ThMd = styled.th`
  white-space: nowrap;
  text-align: left;
`;
const H1Md = styled(H1)`
  text-align: left;
  margin-left: 0;
  margin-top: ${spacing.medium};
`;
const H2Md = styled(H2)`
  text-align: left;
  margin-left: 0;
  margin-top: ${spacing.medium};
`;

const H3Md = styled(H3)`
  margin-top: ${spacing.medium};
`;
const H4Md = styled(H4)`
  margin-top: ${spacing.small};
`;

const TextMd = styled(Text)`
  margin-top: ${spacing.small};
`;

const UlMd = styled(UL)`
  margin-top: ${spacing.tiny};
  ${TextMd} {
    margin-top: 0;
  }
`;

const OlMd = styled(OL)`
  margin-top: ${spacing.medium};
`;

const ImgMd = styled(Img)`
  margin-top: ${spacing.medium};
`;

export { H1Md, H2Md, H3Md, H4Md, TextMd, UlMd, OlMd, ImgMd, ThMd };
