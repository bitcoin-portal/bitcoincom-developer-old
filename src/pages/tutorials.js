// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import {
  theme,
  CardContainer,
  ContentBlock,
  H1,
  H2,
  Card,
} from 'bitcoincom-storybook';

type Props = {
  location: Object,
  data: {
    heroImage: any,
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string,
            updatedAt: string,
            createdAt: string,
          },
          excerpt: string,
        },
      },
    },
  },
};

const Tutorials = ({ location, data }: Props) => {
  const tutorials = data.allMarkdownRemark.edges;

  return (
    <DefaultLayout
      location={location}
      hero={
        <ContentBlock>
          <H1 contrast>Tutorials</H1>
          <H2
            balanced
            style={{ maxWidth: 730, color: theme.palette.primary.main }}
          >
            Real world examples to learn from and bootstrap your next Bitcoin
            Cash project
          </H2>
        </ContentBlock>
      }
    >
      <HelmetPlus
        title={`Tutorials - ${data.site.siteMetadata.title}`}
        description="Tutorials for the building on Bitcoin Cash, utilizing the Bitbox and SLP SDKs"
        keywords={[
          'bitcoin tutorials',
          'bitcoin cash tutorials',
          'development tutorials',
        ]}
        location={location}
      />
      <ContentBlock>
        <CardContainer>
          {tutorials.map(tutorial => (
            <Card
              key={tutorial.node.frontmatter.title}
              title={tutorial.node.frontmatter.title}
              subtitle={tutorial.node.description || tutorial.node.excerpt}
              cta={{ text: 'Read', link: tutorial.node.fields.slug }}
            />
          ))}
        </CardContainer>
      </ContentBlock>
    </DefaultLayout>
  );
};

export default Tutorials;

export const query = graphql`
  query TutorialsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___ordinal], order: DESC }
      filter: { fields: { type: { eq: "tutorial" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
