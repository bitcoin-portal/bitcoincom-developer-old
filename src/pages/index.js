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
      <StyledContentBlock image="none">
        <H3 style={{ color: theme.palette.primary.main }}>
          Bitcoin.com Developer Platform
        </H3>
        <H1 contrast>Change the world with Bitcoin Cash</H1>
        <H2 contrast>Developer Tooling, Cloud, and Market</H2>
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
      </StyledContentBlock>
    }
  >
    <ContentBlock>
      <H2>
        Developing on{' '}
        <span style={{ color: theme.palette.primary.main }}>Bitcoin Cash</span>
      </H2>
      <Paragraph center style={{ maxWidth: 'unset' }}>
        Money is critical to the Human Condition. Bitcoin Cash and Blockchain
        technology enable financial sovereignty in a way which is unique in
        history.
      </Paragraph>
      <Paragraph center style={{ maxWidth: 'unset' }}>
        Bitcoin Cash is the soundest money the world has ever known. As a
        developer you can make it available to all people, whatever their age,
        gender, nationality or financial status.
      </Paragraph>
      <CardContainer>
        <Card
          title="Build on BCH"
          subtitle="Leverage the blockchain to build decentralized and censorship resistant applications. Help bring financial sovereignty to every corner of the world."
          image=""
        />
        <Card
          title="Create Transactions"
          subtitle="BITBOX supports all standard transaction types including P2PK, P2PKH, P2MS, P2SH and nullData, and all Bitcoin Cash OP codes."
          image=""
        />
        <Card
          title="BCommerce Solutions"
          subtitle="Blockchain commerce is the future of online business. Bitcoin Cash is the money of the Internet Nation. Together they enable an entirely new class of application."
          image=""
        />
        <Card
          title="On chain applications"
          subtitle="Distributed, immutable, decentralized—the blockchain offers capabilities which are extremely powerful. Take your application to the next level with Bitcoin Cash."
          image=""
        />
      </CardContainer>
    </ContentBlock>
    <ContentBlock background={ContentBlock.background.dark}>
      <H2 contrast>Get Started Today!</H2>
      <CardContainer>
        <Card
          title="Learn"
          subtitle="Build the foundation of knowledge needed to create world changing apps. Access tutorials, blog posts, video streams and code snippets to help you go from being a hobbyist to a professional step by step."
          large
          link
          href="/learn"
          image={data.learnImage.childImageSharp.fluid.src}
        />
        <Card
          title="Develop"
          subtitle="With the power of Bitcoin Cash, the ease of BITBOX and the Bitcoin.com developer platform, you’ll create your most innovative apps ever."
          large
          link
          href="/develop"
          image={data.developImage.childImageSharp.fluid.src}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default IndexPage;

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero2.jpg" }) {
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
    bannerImage: file(relativePath: { eq: "tech-banner.jpg" }) {
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
    developImage: file(relativePath: { eq: "develop-thumb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    learnImage: file(relativePath: { eq: "learn-thumb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
