// @flow
import * as React from 'react';
import styled from 'styled-components';
import {
  theme,
  media,
  Paragraph,
  Link,
} from '@bitcoin-portal/bitcoincom-storybook';

const Text = styled(Paragraph)`
  max-width: 800px;
  ${media.md`
  margin: 0 auto ${theme.spacing.unit * 4}px auto;
  `}
  & > a {
    display: inline;
  }
`;

type Props = {
  contrast: boolean,
};

const MasteringBitcoinCashAttribution = ({ contrast }: Props) => (
  <Text contrast={contrast}>
    The following is based on{' '}
    <Link href="https://github.com/bitcoinbook/bitcoinbook">
      Mastering Bitcoin
    </Link>{' '}
    by Andreas M. Antonopoulos{' '}
    <Link href="https://github.com/bitcoinbook/bitcoinbook#mastering-bitcoin---first-edition">
      First Edition
    </Link>{' '}
    which is licensed under{' '}
    <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
      Creative Commons Attribution-ShareAlike
    </Link>
  </Text>
);

export default MasteringBitcoinCashAttribution;
