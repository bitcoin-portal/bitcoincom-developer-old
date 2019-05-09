// @flow

import * as React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import {
  theme,
  ContentBlock,
  H1,
  H3,
  Card,
  CardContainer,
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
        },
      },
    },
  },
};

const Insights = ({ location, data }: Props) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <DefaultLayout
      location={location}
      hero={
        <ContentBlock left>
          <H3 balanced style={{ color: theme.palette.primary.main }}>
            Learn from developers who have shipped successful apps.
          </H3>
          <H1 contrast>Insights</H1>
        </ContentBlock>
      }
    >
      <HelmetPlus
        title={`Inisghts - ${data.site.siteMetadata.title}`}
        description="Insights into the learnings and process people have faced while building new products with Bitcoin Cash and Bitbox"
        keywords={[
          'development insights',
          'development blog',
          'bitcoin cash tutorials',
          'building with bitcoin cash',
        ]}
        location={location}
      />
      <ContentBlock>
        <CardContainer>
          {posts.map(post => (
            <Card
              title={post.node.frontmatter.title}
              subtitle={post.node.frontmatter.description}
              cta={{ text: 'Read More', link: post.node.fields.slug }}
            />
          ))}
        </CardContainer>
      </ContentBlock>
    </DefaultLayout>
  );
};

export default Insights;

export const query = graphql`
  query InsightsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___ordinal], order: DESC }
      filter: { fields: { type: { eq: "insight" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
            updatedAt(formatString: "MMMM Do, YYYY")
            publishedAt(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero-learn.jpg" }) {
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
