// @flow

import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import {
  theme,
  media,
  ContentBlock,
  H2,
  H1,
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

const Learn = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <StyledContentBlock>
        <H1 contrast style={{ maxWidth: 730 }}>
          Change the world with Bitcoin Cash
        </H1>
        <H2 style={{ color: theme.palette.primary.main }}>
          Developer Tooling, Cloud, and Market
        </H2>
      </StyledContentBlock>
    }
  >
    <HelmetPlus
      title={`Learn - ${data.site.siteMetadata.title}`}
      description="Learning center and resources for all of your Bitcoin Cash development needs"
      keywords={[
        'learn bitcoin',
        'bitcoin tutorials',
        'learn bitcoin cash',
        'build with bitcoin cash',
        'bitcoin learning',
      ]}
      location={location}
    />

    <ContentBlock>
      <CardContainer>
        <Card
          round
          small
          image={data.tutorialsImage.childImageSharp.fluid.src}
          title="Tutorials"
          subtitle="Step by step instructions to build Bitcoin Cash apps from scratch.
            See real world examples built and have your own working copies
            to bootstrap your project from."
          cta={{ text: 'View', link: '/tutorials' }}
        />
        <Card
          round
          small
          image={data.insightsImage.childImageSharp.fluid.src}
          title="Insights"
          subtitle="Learn from developers who have already shipped successful apps. What
            worked and what would they do different?"
          cta={{ text: 'View', link: '/insights' }}
        />
        <Card
          round
          small
          image={data.masteringImage.childImageSharp.fluid.src}
          title="Mastering Bitcoin Cash"
          subtitle="Based on Mastering Bitcoin by Andreas M. Antonopoulos, Mastering
            Bitcoin Cash is the ultimate guide to bring your knowledge from
            beginner to professional step by step."
          cta={{ text: 'Read', link: '/mastering-bitcoin-cash' }}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default Learn;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tutorialsImage: file(relativePath: { eq: "Tutorials.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    insightsImage: file(relativePath: { eq: "Insights.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    masteringImage: file(relativePath: { eq: "Mastering.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
