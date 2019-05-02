// @flow

import React from 'react';
import styled from 'styled-components';

import spacing from 'styles/spacing';
import Container from 'components/Container';
import { ContentBlock } from 'bitcoincom-storybook';

const Main = styled.div`
  padding: ${spacing.medium};
  position: relative;
  padding: ${spacing.large} 0;
`;

const Flourish = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background: ${props => props.theme.primaryMuted};
  right: 0;
  bottom: -33px;
  z-index: -1;
  clip-path: polygon(70% 0, 100% 9%, 100% 86%, 73% 100%, 0 86%, 0 10%);
`;
const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Content = styled(Container)`
  position: relative;
  z-index: 1;
`;

type Props = {
  children: React.Node,
  image: ?String,
};

const Hero = ({ children, image }: Props) => (
  <ContentBlock image={image}>
    {children}
    {/* <Cover />
    <Content>{children}</Content>
    <Flourish /> */}
  </ContentBlock>
);

export default Hero;
