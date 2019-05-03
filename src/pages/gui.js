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
  H1,
  H2,
  H3,
  Card,
} from 'bitcoincom-storybook';
import content from '../pageContent/gui';

const StyledContentBlock = styled(ContentBlock)`
  & > div > :nth-child(2) {
    flex-basis: 75%;
  }
  & > div > div > img {
    display: none;
  }
  & > div > div > div {
    max-width: unset;
    & > div > div {
      margin: auto;
    }
  }
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
  data: { heroImage: any },
};

const GuiPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <StyledContentBlock image="none">
        <H3 style={{ color: theme.palette.primary.main }}>
          Your Personal Blockchain
        </H3>
        <H1 contrast>GUI</H1>
        <H2 contrast>
          Full BCH blockchain and BIP44 wallet for use during development.
        </H2>
      </StyledContentBlock>
    }
  >
    <HelmetPlus
      title={`GUI - ${data.site.siteMetadata.title}`}
      description="GUI based bitcoin.com developer platform and resources"
      keywords={['gui']}
      location={location}
    />

    <StyledContentBlock>
      <Card
        title="Instant Blockchain"
        subtitle="Your own Bitcoin Cash blockchain to configure however you choose. It’s recreated from scratch each time you restart GUI. It doesn’t connect to the real network and only consists of transactions and blocks which you create locally so it’s quick and responsive."
        cta={{ text: 'More', link: '/gui/docs/getting-started' }}
      />
      <CardContainer>
        {content.map(item => (
          <Card
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            cta={{
              text: 'More',
              link: item.link,
            }}
          />
        ))}
      </CardContainer>
    </StyledContentBlock>
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
    heroImage: file(relativePath: { eq: "hero.jpeg" }) {
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
