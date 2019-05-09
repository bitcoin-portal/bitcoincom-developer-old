// @flow

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import {
  theme,
  media,
  ContentBlock,
  H1,
  H2,
  H3,
  Card,
  Paragraph,
  Code,
  CardContainer,
} from 'bitcoincom-storybook';

const CardContent = styled.div`
  display: grid;
  grid-template-areas: 'logo' 'content' 'install';
  justify-content: center;
  align-items: center;
  ${media.md`
  justify-content: space-evenly;
    grid-template-areas: 'logo content' 'logo install';
  `}
  ${media.lg`
  grid-template-areas: 'logo content install';
    flex-direction: row;
  `}
`;

const CardText = styled.div`
  text-align: center;
  grid-area: content;

  ${media.md`
    text-align: left;
  `}
`;
const CardInstall = styled.div`
  text-align: center;
  grid-area: install;

  ${media.md`
    text-align: left;
    & > p {
      text-align: left;
    }
  `}
`;

type Props = {
  location: Object,
  data: { heroImage: any },
};

const About = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock left>
        <H3 balanced style={{ color: theme.palette.primary.main }}>
          Developer Tooling, Resources, Cloud, and Market
        </H3>
        <H1 contrast balanced>
          About
        </H1>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`About  - ${data.site.siteMetadata.title}`}
      description="Bitcoin.com developer platform.  Developer Tooling, Resources, Cloud, and Market"
      keywords={['about page']}
      location={location}
    />
    <ContentBlock>
      <Card full style={{ marginBottom: 32 }}>
        <CardContent>
          <div style={{ gridArea: 'logo' }}>
            <img
              src={data.bitboxImage.childImageSharp.fluid.src}
              alt="Bitbox"
            />
          </div>
          <CardText>
            <H2 left>BITBOX</H2>
            <Paragraph>
              Bitcoin.com’s developer platform is based on the popular BITBOX
              javascript framework. Offering utility methods for Mnemonics,
              HDNodes, ECPairs, Crypto, Address conversion, Transactions and
              much more.
            </Paragraph>
          </CardText>
          <CardInstall>
            <Paragraph style={{ color: theme.palette.primary.main }}>
              Install BITBOX SDK via NPM
            </Paragraph>
            <Code language="bash">npm install -g bitbox-sdk</Code>
          </CardInstall>
        </CardContent>
      </Card>

      <CardContainer>
        <Card
          image={data.badgerImage.childImageSharp.fluid.src}
          title="Badger"
          subtitle="Your gateway to the world of Bitcoin Cash (BCH) applications."
        />
        <Card
          image={data.restImage.childImageSharp.fluid.src}
          title="REST"
          subtitle="The BCH JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls."
        />
        <Card
          image={data.cloudImage.childImageSharp.fluid.src}
          title="Cloud"
          subtitle="Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ BITBOX."
        />
        <Card
          image={data.marketImage.childImageSharp.fluid.src}
          title="Market"
          subtitle="Paid downloads, streaming media, in-app purchases, tokens and more ways for you to monetize."
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    bitboxImage: file(relativePath: { eq: "develop-thumb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    badgerImage: file(relativePath: { eq: "develop-thumb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    restImage: file(relativePath: { eq: "develop-thumb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cloudImage: file(relativePath: { eq: "develop-thumb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketImage: file(relativePath: { eq: "market.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
