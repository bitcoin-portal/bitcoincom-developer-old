// @flow

import React from 'react';
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
  Card,
} from '@bitcoin-portal/bitcoincom-storybook';

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
          small
          image={data.bitboxImage.childImageSharp.fluid.src}
          title="BITBOX"
          subtitle="Fully featured javascript framework. Offering utility methods for Mnemonics, HDNodes, ECPairs, Crypto, Address conversion, Transactions and much more."
          cta={{ text: 'View', link: '/bitbox' }}
        />
        <Card
          small
          image={data.badgerImage.childImageSharp.fluid.src}
          title="Badger"
          subtitle="Your gateway to the Bitcoin Cash (BCH) ecosystem. Integrate your app with with the Bitcoin Cash blockchain, without the complexity."
          cta={{ text: 'View', link: '/badger' }}
        />
        <Card
          small
          image={data.buildImage.childImageSharp.fluid.src}
          title="Bitcoin.com Link"
          subtitle="A javascript client package for building blockchain connected applications; with support for existing Bitcoin Cash non-custodial Wallets."
          cta={{ text: 'View', link: '/bitcoincom-link' }}
        />
        <Card
          small
          image={data.restImage.childImageSharp.fluid.src}
          title="REST"
          subtitle="The BCH JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls."
          cta={{ text: 'View', link: '/rest' }}
        />
        <Card
          small
          image={data.slpImage.childImageSharp.fluid.src}
          title="SLP"
          subtitle="Tokenize anything. Everything you need to easily issue, spend or trade your own token."
          cta={{ text: 'View', link: '/slp' }}
        />
        <Card
          small
          image={data.slpImage.childImageSharp.fluid.src}
          title="SLP Indexer"
          subtitle="Validate and index SLP Tokens on the Bitcoin Cash network. Our SLP Indexer is built to scale for exchanges, wallets, games, and the entire token community."
          cta={{ text: 'View', link: '/slp-indexer' }}
        />
        <Card
          small
          image={data.cashScriptImage.childImageSharp.fluid.src}
          cta={{ text: 'View', link: '/cashscript/docs/getting-started' }}
          title="CashScript"
          subtitle="Create contracts and complex spending scripts on Bitcoin Cash. Everything you need to write cash contracts and easily integrate them into your applications."
        />
        <Card
          small
          image={data.guiImage.childImageSharp.fluid.src}
          title="GUI"
          subtitle="BIP44 development wallet. Convert between cashaddr/legacy addresses. Create QR codes for WIF, XPub and XPrivs. Sign and verify messages."
          cta={{ text: 'View', link: '/gui' }}
        />
        <Card
          small
          image={data.faucetsImage.childImageSharp.fluid.src}
          title="Faucets"
          subtitle="Testnet BCH for developers."
          cta={{ text: 'View', link: '/faucets' }}
        />
        <Card
          small
          image={data.cloudImage.childImageSharp.fluid.src}
          title="Cloud"
          subtitle="Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ BITBOX."
          cta={{ text: 'Coming soon' }}
        />
        <Card
          small
          image={data.marketImage.childImageSharp.fluid.src}
          title="Marketplace"
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
    bitboxImage: file(relativePath: { eq: "Bitbox.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    badgerImage: file(relativePath: { eq: "Badger.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    buildImage: file(relativePath: { eq: "build.png" }) {
      childImageSharp {
        fluid(maxWidth: 132, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    restImage: file(relativePath: { eq: "Rest.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
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
    guiImage: file(relativePath: { eq: "GUI.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cashScriptImage: file(relativePath: { eq: "Develop.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    faucetsImage: file(relativePath: { eq: "faucet.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cloudImage: file(relativePath: { eq: "Cloud.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketImage: file(relativePath: { eq: "marketplace.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
