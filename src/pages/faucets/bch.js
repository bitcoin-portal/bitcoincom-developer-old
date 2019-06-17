// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import { theme, H1, H3, ContentBlock } from 'bitcoincom-storybook';
import BchFaucet from 'components/bch-faucet';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const Faucet = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock>
        <H1 contrast>Testnet BCH Faucet</H1>
        <H3 style={{ color: theme.palette.primary.main }}>For developers</H3>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`Testnet BCH Faucet - ${data.site.siteMetadata.title}`}
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
    <BchFaucet />
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
