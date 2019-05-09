// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import {
  theme,
  ContentBlock,
  H1,
  H2,
  H3,
  Button,
  Card,
  CardContainer,
} from 'bitcoincom-storybook';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const RestPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock left>
        <H3 style={{ color: theme.palette.primary.main }}>BCH RPC over HTTP</H3>
        <H1 contrast>REST</H1>
        <H2 contrast>REST layer for Bitcoin.com Cloud</H2>

        <Button round dark href="/rest/docs/getting-started">
          Start Here
        </Button>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`REST - ${data.site.siteMetadata.title}`}
      description="REST based bitcoin.com developer platform and resources.  Full Bitcoin Cash and SLP api over a REST interface"
      keywords={[
        'rest api',
        'bitcoin cash RPC',
        'bitcoin cash rest',
        'bitcoin rest',
        'slp rest',
      ]}
      location={location}
    />
    <ContentBlock>
      <CardContainer>
        <Card
          title="BCH RPC over HTTP"
          subtitle="100% of the Bitcoin Cash JSON RPC available over HTTP with proper REST semantics. BITBOX SDK integration lets you GET and POST requests to the BCH network with no further setup. Or create your own client which to speak to the blockchain over REST."
          cta={{
            text: 'More',
            link: '/rest/docs/getting-started',
          }}
        />
        <Card
          title="Proper REST Semantics"
          subtitle="Instead of POSTing directly to bitcoind we've wrapped the BCH JSON RPC in REST semantics so you GET when reading and POST when writing from/to the chain."
          cta={{ text: 'More', link: '/rest/docs/getting-started' }}
        />
        <Card
          title="SLP support"
          subtitle="Get details for all your SLP tokens. The fastest and easiest API to use for integrating Simple Ledger Protocol (SLP) tokens into your next app."
          cta={{ text: 'More', link: '/rest/docs/address' }}
        />
        <Card
          title="Addresses, Blocks and Transactions"
          subtitle="Get details such as balance, utxo and unconfirmed transactions for an address. Get details about a block or transaction."
          cta={{ text: 'More', link: '/rest/docs/address' }}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default RestPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
