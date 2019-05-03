// @flow

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';
import BitboxLogo from 'assets/images/bitboxLogo';
import {
  theme,
  media,
  ContentBlock,
  H1,
  H2,
  H3,
  Code,
  Card,
  Paragraph,
} from 'bitcoincom-storybook';

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;
  & > div > div {
    margin: ${theme.spacing.unit}px auto !important;
  }

  & > div > div > div {
    max-width: unset;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-row-gap: ${theme.spacing.unit * 4}px;
  grid-column-gap: ${theme.spacing.unit * 4}px;
  margin-top: ${theme.spacing.unit * 8}px;
  ${media.md`
    grid-template-columns: 1fr 1fr;
  `}

  & > div {
    margin: 0 auto;
    background-color: ${theme.palette.background.default};
  }
`;

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

const FAQ = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <StyledContentBlock>
        <H3 style={{ color: theme.palette.primary.main }}>
          {`Bitcoin.com's developer platform`}
        </H3>
        <H1 contrast>FAQ</H1>
        <H2 contrast>Frequently asked questions</H2>
      </StyledContentBlock>
    }
  >
    <HelmetPlus
      title={`About  - ${data.site.siteMetadata.title}`}
      description="Bitcoin.com developer platform.  Developer Tooling, Resources, Cloud, and Marker"
      location={location}
    />
    <StyledContentBlock>
      <Card>
        <CardContent>
          <div style={{ gridArea: 'logo' }}>
            <BitboxLogo size={158} />
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
          title="Badger"
          subtitle="Your gateway to the world of Bitcoin Cash (BCH) applications."
        />
        <Card
          title="REST"
          subtitle="The BCH JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls."
        />
        <Card
          title="Cloud"
          subtitle="Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ BITBOX."
        />
        <Card
          title="Market"
          subtitle="Paid downloads, streaming media, in-app purchases, tokens and more ways for you to monetize."
        />
      </CardContainer>
    </StyledContentBlock>
  </DefaultLayout>
);

export default FAQ;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f9b016", shadow: "#191919" }
          maxWidth: 2000
          quality: 85
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
