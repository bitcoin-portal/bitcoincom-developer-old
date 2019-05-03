// @flow

import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import { content } from 'pageContent/bitbox';
import {
  theme,
  media,
  ContentBlock,
  H1,
  H3,
  H2,
  Code,
  Button,
  Paragraph,
} from 'bitcoincom-storybook';

const HeroAside = styled.div`
  padding: ${theme.spacing.unit * 4}px;
  text-align: center;

  ${media.md`
    text-align: left;
  `}
`;

const PageContent = styled(ContentBlock)`
  & > div > div > p {
    text-align: left;
    max-width: unset;
  }
  & > div > div > h2 {
    text-align: left;
  }

  & > div > div > div {
    margin: ${theme.spacing.unit * 4}px 0;
  }
`;

type Props = {
  location: Object,
  data: { heroImage: any },
};

const BitboxPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock
        aside={
          <HeroAside>
            <H3 style={{ color: theme.palette.primary.main }}>
              Install via NPM
            </H3>
            <div
              style={{
                margin: `${theme.spacing.unit * 2}px 0`,
                maxWidth: 450,
              }}
            >
              <Code language="bash">npm install bitbox-sdk --global</Code>
            </div>

            <Button round link dark href="/bitbox/docs/getting-started">
              Start Here
            </Button>
          </HeroAside>
        }
      >
        <H3 style={{ color: theme.palette.primary.main }}>
          Incredibly powerful. Easy to learn
        </H3>
        <H1 contrast>BITBOX</H1>
        <H2 contrast>
          Powerful and intuitive APIs which will have you creating world class
          applications
        </H2>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`Bitbox - ${data.site.siteMetadata.title}`}
      description="Bitbox based bitcoin.com developer platform and resources"
      keywords={['bitbox', 'bitbox sdk', 'learn bitbox', 'bitbox development']}
      location={location}
    />
    <PageContent>
      {content.map(item => (
        <React.Fragment key={item.title}>
          <H2 left>{item.title}</H2>
          {item.text.map(p => (
            <Paragraph key={p}>{p}</Paragraph>
          ))}
          {item.code && <Code>{item.code}</Code>}
          {item.link && (
            <Button link primary href={item.link}>
              More
            </Button>
          )}
        </React.Fragment>
      ))}
    </PageContent>
  </DefaultLayout>
);

export default BitboxPage;

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
