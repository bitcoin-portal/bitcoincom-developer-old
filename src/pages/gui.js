// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';
import styled from 'styled-components';
import {
  media,
  theme,
  ContentBlock,
  H1,
  H2,
  H3,
  Paragraph,
  Button,
  Card,
  CardContainer,
} from '@bitcoin-portal/bitcoincom-storybook';

const CardContent = styled.div`
  display: grid;
  grid-template-areas: 'logo' 'content';
  justify-content: center;
  align-items: center;
  ${media.md`
  justify-content: space-evenly;
    grid-template-areas: 'logo content' 'logo content';
  `}
  ${media.lg`
    flex-direction: row;
  `}
`;

const CardText = styled.div`
  text-align: center;
  grid-area: content;
`;

const CardImage = styled.div`
  grid-area: logo;
  margin-bottom: ${theme.spacing.unit * 4}px;
  ${media.md`
    margin-bottom: 0;
    margin-right: ${theme.spacing.unit * 4}px;
 `};

  & img {
    max-width: 132px;
  }
`;

type Props = {
  location: Object,
  data: { heroImage: any },
};

const GuiPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock>
        <H3 balanced style={{ color: theme.palette.primary.main }}>
          Your Personal Blockchain
        </H3>
        <H1 contrast balanced>
          GUI
        </H1>
        <H2 contrast balanced style={{ maxWidth: 730 }}>
          Full BCH blockchain and BIP44 wallet for use during development.
        </H2>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`GUI - ${data.site.siteMetadata.title}`}
      description="GUI based bitcoin.com developer platform and resources"
      keywords={['gui']}
      location={location}
    />

    <ContentBlock>
      <Card full style={{ marginBottom: 32 }}>
        <CardContent>
          <CardImage>
            <img src={data.instantImage.childImageSharp.fluid.src} alt="GUI" />
          </CardImage>
          <CardText>
            <H2 left>Instant BlockChain</H2>
            <Paragraph>
              Your own Bitcoin Cash blockchain to configure however you choose.
              It’s recreated from scratch each time you restart GUI. It doesn’t
              connect to the real network and only consists of transactions and
              blocks which you create locally so it’s quick and responsive.
            </Paragraph>
            <Button
              link
              href="/gui/docs/getting-started"
              style={{ margin: 'auto' }}
            >
              More
            </Button>
          </CardText>
        </CardContent>
      </Card>
      <CardContainer>
        <Card
          small
          title="BIP44 development wallet"
          subtitle="Create as many BIP44 accounts as you want on mainnet or testnet. See their address, WIF, XPub and XPriv."
          image={data.bip44Image.childImageSharp.fluid.src}
          cta={{
            text: 'More',
            link: '/gui/docs/wallet',
          }}
        />
        <Card
          small
          title="Address Conversion"
          subtitle="Paste in legacy, cashaddr, wif, xpub or xpriv and get address conversion and QR codes."
          image={data.addressImage.childImageSharp.fluid.src}
          cta={{
            text: 'More',
            link: '/gui/docs/conversion',
          }}
        />
        <Card
          small
          title="Sign/Verify messages"
          subtitle="Sign messages in legacy or cashaddr with any address in your GUI. Verify messages in legacy or cashaddr from any wallet."
          image={data.signImage.childImageSharp.fluid.src}
          cta={{
            text: 'More',
            link: '/gui/docs/sign-verify',
          }}
        />
        <Card
          small
          title="Configured how you like it"
          subtitle="Create as many accounts as you need. Vary the entropy in the mnemonic. Supports 8 languages. Custom HD Paths. Add a password. Mainnet or Testnet."
          image={data.configImage.childImageSharp.fluid.src}
          cta={{
            text: 'More',
            link: '/gui/docs/configuration',
          }}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default GuiPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    instantImage: file(relativePath: { eq: "instant_blockchain.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bip44Image: file(relativePath: { eq: "bip44_icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    addressImage: file(relativePath: { eq: "address_conversion.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signImage: file(relativePath: { eq: "sign_verify.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    configImage: file(relativePath: { eq: "configured_how_like.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
