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
} from '@bitcoin-portal/bitcoincom-storybook';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const WalletApiPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock>
        <H3 style={{ color: theme.palette.primary.main }}>
          Multi Wallet Provider SDK
        </H3>
        <H1 contrast>Bitcoin Wallet API</H1>
        <H2 contrast>Build non-custodial blockchain applications</H2>

        <Button round link dark href="/wallet-api/docs/getting-started">
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
          small
          title="Simple Method Interface"
          subtitle="Provides high level actionable methods which allow you to get going from day one. No more worrying about parse UTXOs or formatting transaction OP codes."
          cta={{ text: 'More', link: '/wallet-api/docs/getting-started' }}
          image={data.txImage.childImageSharp.fluid.src}
        />
        <Card
          small
          title="Multi Wallet Support"
          subtitle="Integrate once, and get support for multiple wallet. Eliminates the need to add multiple integrations for different wallets."
          cta={{ text: 'More', link: '/wallet-api/docs/getting-started' }}
          image={data.onchainImage.childImageSharp.fluid.src}
        />
        <Card
          small
          title="SLP support"
          subtitle="Simple send and receive methods available help users interact with your app. Your application can even create brand new SLP tokens on the fly."
          cta={{ text: 'More', link: '/wallet-api/docs/getting-started' }}
          image={data.slpImage.childImageSharp.fluid.src}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default WalletApiPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    txImage: file(relativePath: { eq: "create_tx.png" }) {
      childImageSharp {
        fluid(maxWidth: 132, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    onchainImage: file(relativePath: { eq: "onchain_apps.png" }) {
      childImageSharp {
        fluid(maxWidth: 132, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slpImage: file(relativePath: { eq: "SLP.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    addrImage: file(relativePath: { eq: "addresses_blocks_transactions.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
