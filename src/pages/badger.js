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
} from 'bitcoincom-storybook';

const StyledContentBlock = styled(ContentBlock)`
  & > div > :nth-child(2) {
    flex-basis: 75%;
  }
  & > div > div > img {
    display: none;
  }
`;

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
    heroImage={data.heroImage}
    hero={
      <StyledContentBlock image="none">
        <H3 style={{ color: theme.palette.primary.main }}>
          The easiest way to build BCH apps
        </H3>
        <H1 contrast>Badger SDK</H1>
        <H2 contrast>Your gateway to the world of Bitcoin Cash (BCH) apps</H2>
        <ButtonWrapper>
          <Button round link href="https://badger.bitcoin.com" target="_blank">
            Install Badger
          </Button>
          <Button round link dark href="/badger/docs/getting-started">
            Start Here
          </Button>
        </ButtonWrapper>
      </StyledContentBlock>
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
          title="Badger SDK"
          subtitle="Badger Wallet injects an API into pages a user visits to allow apps to request a users's permission to send Bitcoin Cash, send tokens, or authenticate with CashID."
          cta={{ text: 'View', link: '/badger/docs/getting-started' }}
        />

        <Card
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
