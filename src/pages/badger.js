// @flow

import * as React from 'react';
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
  Button,
  Card,
  CardContainer,
} from 'bitcoincom-storybook';

const ButtonWrapper = styled.div`
  display: grid;
  grid-column-gap: ${theme.spacing.unit * 2}px;
  grid-row-gap: ${theme.spacing.unit * 2}px;
  margin: 0 auto;
  justify-items: center;
  ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

type Props = {
  location: Object,
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
    heroImage: any,
  },
};

const BadgerPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock left>
        <H3 balanced style={{ color: theme.palette.primary.main }}>
          The easiest way to build BCH apps
        </H3>
        <H1 balanced contrast>
          Badger SDK
        </H1>
        <H2 balanced contrast>
          Your gateway to the world of Bitcoin Cash (BCH) apps
        </H2>
        <ButtonWrapper>
          <Button round link href="https://badger.bitcoin.com" target="_blank">
            Install Badger
          </Button>
          <Button round link dark href="/badger/docs/getting-started">
            Start Here
          </Button>
        </ButtonWrapper>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`Badger - ${data.site.siteMetadata.title}`}
      description="Badger documentation, your gateway to the world of Bitcoin Cash (BCH) applications"
      keywords={[
        'badger',
        'badger sdk',
        'badger wallet',
        'SLP tokens',
        'simple ledger protocol',
      ]}
      location={location}
    />
    <ContentBlock>
      <CardContainer>
        <Card
          image={data.badgerSDKImage.childImageSharp.fluid.src}
          title="Badger SDK"
          subtitle="Badger Wallet injects an API into pages a user visits to allow apps to request a users's permission to send Bitcoin Cash, send tokens, or authenticate with CashID."
          cta={{ text: 'View', link: '/badger/docs/getting-started' }}
        />

        <Card
          image={data.badgerReactImage.childImageSharp.fluid.src}
          title="Badger React Components"
          subtitle="React based components and tools to make integrating Bitcoin Cash (BCH) into your next project easy."
          cta={{ text: 'View', link: '/badger/docs/badger-components-react' }}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default BadgerPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    badgerSDKImage: file(relativePath: { eq: "Badger_sdk.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    badgerReactImage: file(relativePath: { eq: "Badger_react.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
