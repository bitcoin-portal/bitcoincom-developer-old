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
  H3,
  Button,
  Card,
  CardContainer,
} from '@bitcoin-portal/bitcoincom-storybook';

const ButtonWrapper = styled.div`
  display: grid;
  grid-column-gap: ${theme.spacing.unit * 2}px;
  grid-row-gap: ${theme.spacing.unit * 2}px;
  margin: 0 auto;
  justify-items: center;
  justify-content: center;
  max-width: 700px;
  margin-top: ${theme.spacing.unit * 2}px;
  ${media.md`
    margin-top: ${theme.spacing.unit * 4}px;
    grid-template-columns: 1fr 1fr;
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
      <ContentBlock>
        <H3 balanced style={{ color: theme.palette.primary.main }}>
          Written in Java with scalability in mind
        </H3>
        <H1 balanced contrast>
          SLP Indexer
        </H1>
        <H3 balanced contrast>
          The open source SLP Indexer Server for indexing SLP tokens on Bitcoin
          Cash
        </H3>
        <ButtonWrapper>
          <Button
            round
            link
            href="https://github.com/Bitcoin-com/slp-indexer"
            target="_blank"
          >
            View on Github
          </Button>
          <Button
            round
            link
            dark
            href="https://read.cash/@EmilOldenburg/bitcoincom-slp-indexer-cc1d40c4"
          >
            Read the annoucement
          </Button>
        </ButtonWrapper>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`SLP Indexer - ${data.site.siteMetadata.title}`}
      description="The open source SLP Indexer Server for indexing SLP tokens on Bitcoin Cash. Written in Java with scalability in mind."
      keywords={['slp', 'slp indexer', 'SLP tokens', 'simple ledger protocol']}
      location={location}
    />
    <ContentBlock>
      <CardContainer>
        <Card
          small
          image={data.badgerSDKImage.childImageSharp.fluid.src}
          title="Badger SDK"
          subtitle="Badger Wallet injects an API into pages a user visits to allow apps to request a users's permission to send Bitcoin Cash, send tokens, or authenticate with CashID."
          cta={{ text: 'View', link: '/badger/docs/getting-started' }}
        />

        <Card
          small
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
