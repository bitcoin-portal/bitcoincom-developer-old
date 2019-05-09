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
  Card,
  Button,
} from 'bitcoincom-storybook';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const Faucet = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock>
        <H1 contrast>Faucet</H1>
        <H2 style={{ color: theme.palette.primary.main }}>
          Testnet BCH for developers
        </H2>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`Faucet - ${data.site.siteMetadata.title}`}
      description="Testnet BCH for developers"
      keywords={[
        'bch faucet',
        'bitcoin cash faucet',
        'testnet faucet',
        'bitcoin cash testnet faucet',
        'testnet bch',
      ]}
      location={location}
    />

    <ContentBlock>
      <Card
        full
        image={data.faucetImage.childImageSharp.fluid.src}
        title="BCH Testnet Faucet"
        subtitle="Bitcoin Cash testnet faucet.  Get some testnet BCH for your development needs"
      >
        <Button link primary href="/faucets/bch" style={{ margin: 'auto' }}>
          View
        </Button>
      </Card>
    </ContentBlock>
  </DefaultLayout>
);

export default Faucet;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    faucetImage: file(relativePath: { eq: "faucet.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
