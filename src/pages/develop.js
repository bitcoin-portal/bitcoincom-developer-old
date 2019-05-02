// @flow

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import { theme, media, ContentBlock, H1, H2, Card } from 'bitcoincom-storybook';

const CardContainer = styled.div`
  display: grid;
  grid-row-gap: ${theme.spacing.unit * 4}px;
  grid-column-gap: ${theme.spacing.unit * 4}px;
  margin-top: ${theme.spacing.unit * 8}px;
  ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  & > div {
    margin: 0 auto;
    background-color: ${theme.palette.background.default};
  }

  & > div > div {
    justify-content: space-between;
  }

  & > div > div > h3 {
    margin: 0 auto;
  }
`;

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;
  & > div > div {
    margin: ${theme.spacing.unit}px auto !important;
  }
`;

type Props = {
  location: Object,
  data: { heroImage: any },
};

const DevelopPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <StyledContentBlock>
        <H1 contrast>Develop on Bitcoin Cash</H1>
        <H2 style={{ color: theme.palette.primary.main }}>
          Help bring financial sovereignty to the world
        </H2>
      </StyledContentBlock>
    }
  >
    <HelmetPlus
      title={`Develop - ${data.site.siteMetadata.title}`}
      description="Development hub for all your development needs to be successful on Bitcoin Cash (BCH)"
      keywords={[
        'develop on bitcoin',
        'develop on bitcoin cash',
        'bitcoin cash resources',
      ]}
      location={location}
    />
    <ContentBlock>
      <CardContainer>
        <Card
          title="BITBOX"
          subtitle="Fully featured javascript framework. Offering utility methods for Mnemonics, HDNodes, ECPairs, Crypto, Address conversion, Transactions and much more."
          cta={{ text: 'View', link: '/bitbox' }}
        />
        <Card
          title="Badger"
          subtitle="Your gateway to the Bitcoin Cash (BCH) ecosystem. Integrate your app with with the Bitcoin Cash blockchain, without the complexity."
          cta={{ text: 'View', link: '/badger' }}
        />
        <Card
          title="REST"
          subtitle="The BCH JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls."
          cta={{ text: 'View', link: '/rest' }}
        />
        <Card
          title="SLP"
          subtitle="Tokenize anything. Everything you need to easily issue, spend or trade your own token."
          cta={{ text: 'View', link: '/slp' }}
        />
        <Card
          title="GUI"
          subtitle="BIP44 development wallet. Convert between cashaddr/legacy addresses. Create QR codes for WIF, XPub and XPrivs. Sign and verify messages."
          cta={{ text: 'View', link: '/gui' }}
        />
        <Card
          to="/faucets"
          title="Faucets"
          subtitle="Testnet BCH for developers."
          cta={{ text: 'View', link: '/faucets' }}
        />
        <Card
          title="Cloud"
          subtitle="Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ BITBOX."
          cta={{ text: 'Coming soon' }}
        />
        <Card
          title="Market"
          subtitle="Paid downloads, streaming media, in-app purchases, tokens and more ways for you to monetize."
          cta={{ text: 'Coming soon' }}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default DevelopPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "hero-develop.jpg" }) {
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
