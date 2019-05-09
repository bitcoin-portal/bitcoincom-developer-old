// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import { theme, ContentBlock, H1, H3, Card } from 'bitcoincom-storybook';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const Faucet = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock left>
        <H3 style={{ color: theme.palette.primary.main }}>
          Testnet BCH for developers
        </H3>
        <H1 contrast>Faucet</H1>
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
        title="BCH Testnet Faucet"
        subtitle="Bitcoin Cash testnet faucet.  Get some testnet BCH for your development needs"
        cta={{ text: 'View', link: '/faucets/bch' }}
      />
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
    heroImage: file(relativePath: { eq: "hero-learn.jpg" }) {
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
