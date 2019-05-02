// @flow

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Hero from 'components/Hero';
import Container from 'components/Container';

import Text from 'atoms/Text';
import StyledLink from 'atoms/StyledLink';

import media from 'styles/media';
import spacing from 'styles/spacing';

import { FaCube, FaCogs, FaCreditCard, FaCartPlus } from 'react-icons/fa';
import {
  theme,
  ContentBlock,
  H2,
  H1,
  H3,
  Button,
  Card,
  Paragraph,
} from 'bitcoincom-storybook';

const WhyDevelopLayout = styled.div`
  padding-top: ${spacing.large} !important;
  display: grid;
  grid-gap: ${spacing.medium};
  max-width: 900px;
`;

const FeaturesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: ${spacing.medium};
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

const Feature = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-gap: ${spacing.small};
`;

const GetStartedLayout = styled.div`
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  display: grid;
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.medium};
  ${media.medium`
    grid-template-columns: .5fr .5fr;
  `};
`;

const StartedInfo = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: ${spacing.small};
  padding: ${spacing.medium};
  text-align: center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr min-content;
  justify-items: center;
  grid-gap: ${spacing.medium};
`;

const BubbleImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 3px solid ${props => props.theme.primary};
  position: relative;
  overflow: hidden;
`;

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
  grid-template-columns: 1fr 1fr 1fr;
`;

const CardContainer = styled.div`
  display: grid;
  grid-row-gap: ${theme.spacing.unit * 4}px;
  grid-column-gap: ${theme.spacing.unit * 4}px;
  grid-template-columns: 1fr 1fr;
  margin-top: ${theme.spacing.unit * 8}px;

  & > div {
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
    heroImage={data.heroImage}
    hero={
      <StyledContentBlock image="none">
        <H3 style={{ color: theme.palette.primary.main }}>
          Bitcoin.com Developer Platform
        </H3>
        <H1 contrast>Change the world with Bitcoin Cash</H1>
        <H2 contrast>Developer Tooling, Cloud, and Market</H2>
        <ButtonWrapper>
          <Button href="/bitbox" round link>
            BITBOX SDK
          </Button>
          <Button href="/slp" round link>
            SLP SDK
          </Button>
          <Button href="/badger" round link>
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
      <Paragraph center>
        Money is critical to the Human Condition. Bitcoin Cash and Blockchain
        technology enable financial sovereignty in a way which is unique in
        history.
      </Paragraph>
      <Paragraph center>
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
