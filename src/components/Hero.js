// @flow

import React from 'react';
import { ContentBlock } from '@bitcoin-portal/bitcoincom-storybook';

type Props = {
  children: React.Node,
  image: ?String,
};

const Hero = ({ children, image }: Props) => (
  <ContentBlock left image={image}>
    {children}
    {/* <Cover />
    <Content>{children}</Content>
    <Flourish /> */}
  </ContentBlock>
);

export default Hero;
