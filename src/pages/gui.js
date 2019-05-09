// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import {
  theme,
  ContentBlock,
  H1,
  H2,
  H3,
  Button,
  Card,
  CardContainer,
} from 'bitcoincom-storybook';
import content from '../pageContent/gui';

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
      <Card
        full
        title="Instant Blockchain"
        subtitle="Your own Bitcoin Cash blockchain to configure however you choose. It’s recreated from scratch each time you restart GUI. It doesn’t connect to the real network and only consists of transactions and blocks which you create locally so it’s quick and responsive."
        style={{ marginBottom: 32 }}
      >
        <Button
          link
          href="/gui/docs/getting-started"
          style={{ margin: 'auto' }}
        >
          More
        </Button>
      </Card>
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
