// @flow

import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import { theme, media, ContentBlock, H1, H2, Card } from 'bitcoincom-storybook';

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;
`;

const CardContainer = styled.div`
  display: grid;
  grid-row-gap: ${theme.spacing.unit * 4}px;
  grid-column-gap: ${theme.spacing.unit * 4}px;
  margin-top: ${theme.spacing.unit * 8}px;
  ${media.md`
    grid-template-columns: 1fr 1fr;
  `}
`;

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
        <StyledContentBlock>
          <H1 contrast>Insights</H1>
          <H2 style={{ color: theme.palette.primary.main }}>
            Learn from developers who have shipped successful apps.
          </H2>
        </StyledContentBlock>
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
      <StyledContentBlock>
        <CardContainer>
          {posts.map(post => (
            <Card
              title={post.node.frontmatter.title}
              subtitle={post.node.frontmatter.description}
              cta={{ text: 'Read More', link: post.node.fields.slug }}
            />
          ))}
        </CardContainer>
      </StyledContentBlock>
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
