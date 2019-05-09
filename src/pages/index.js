// @flow

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import DefaultLayout from 'components/layouts/DefaultLayout';
import {
  theme,
  media,
  ContentBlock,
  H2,
  H1,
  H3,
  Button,
  Card,
  Paragraph,
  CardContainer,
} from 'bitcoincom-storybook';

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

type Props = {
  location: Object,
  data: {
    heroImage: any,
    developImage: any,
    learnImage: any,
    bannerImage: any,
  },
};

const IndexPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock left>
        <H3 balanced style={{ color: theme.palette.primary.main }}>
          Bitcoin.com Developer Platform
        </H3>
        <H1 balanced contrast>
          Change the world with Bitcoin Cash
        </H1>
        <H2 balanced contrast>
          Developer Tooling, Cloud, and Market
        </H2>
        <ButtonWrapper>
          <Button href="/bitbox" round link dark>
            BITBOX SDK
          </Button>
          <Button href="/slp" round link dark>
            SLP SDK
          </Button>
          <Button href="/badger" round link dark>
            Badger SDK
          </Button>
        </ButtonWrapper>
      </ContentBlock>
    }
  >
    <ContentBlock>
      <H2 balanced>
        Developing on{' '}
        <span style={{ color: theme.palette.primary.main }}>Bitcoin Cash</span>
      </H2>
      <Paragraph center balanced>
        Money is critical to the Human Condition. Bitcoin Cash and Blockchain
        technology enable financial sovereignty in a way which is unique in
        history.
      </Paragraph>
      <Paragraph center balanced>
        Bitcoin Cash is the soundest money the world has ever known. As a
        developer you can make it available to all people, whatever their age,
        gender, nationality or financial status.
      </Paragraph>
      <CardContainer>
        <Card
          title="Build on BCH"
          subtitle="Leverage the blockchain to build decentralized and censorship resistant applications. Help bring financial sovereignty to every corner of the world."
          image={data.buildImage.childImageSharp.fluid.src}
        />
        <Card
          title="Create Transactions"
          subtitle="BITBOX supports all standard transaction types including P2PK, P2PKH, P2MS, P2SH and nullData, and all Bitcoin Cash OP codes."
          image={data.txImage.childImageSharp.fluid.src}
        />
        <Card
          title="BCommerce Solutions"
          subtitle="Blockchain commerce is the future of online business. Bitcoin Cash is the money of the Internet Nation. Together they enable an entirely new class of application."
          image={data.commerceImage.childImageSharp.fluid.src}
        />
        <Card
          title="On chain applications"
          subtitle="Distributed, immutable, decentralized—the blockchain offers capabilities which are extremely powerful. Take your application to the next level with Bitcoin Cash."
          image={data.onchainImage.childImageSharp.fluid.src}
        />
      </CardContainer>
    </ContentBlock>
    <ContentBlock background={ContentBlock.background.dark}>
      <H2 contrast>Get Started Today!</H2>
      <CardContainer>
        <Card
          title="Learn"
          subtitle="Build the foundation of knowledge needed to create world changing apps. Access tutorials, blog posts, video streams and code snippets to help you go from being a hobbyist to a professional step by step."
          style={{ background: theme.palette.background.light }}
          link="/learn"
          image={data.learnImage.childImageSharp.fluid.src}
        />
        <Card
          title="Develop"
          subtitle="With the power of Bitcoin Cash, the ease of BITBOX and the Bitcoin.com developer platform, you’ll create your most innovative apps ever."
          style={{ background: theme.palette.background.light }}
          link="/develop"
          image={data.developImage.childImageSharp.fluid.src}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default IndexPage;

export const query = graphql`
  query {
    buildImage: file(relativePath: { eq: "build.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    txImage: file(relativePath: { eq: "create_tx.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    commerceImage: file(relativePath: { eq: "Commerce.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    onchainImage: file(relativePath: { eq: "onchain.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    developImage: file(relativePath: { eq: "Develop.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    learnImage: file(relativePath: { eq: "Learn.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
