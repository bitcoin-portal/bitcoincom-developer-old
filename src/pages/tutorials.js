// @flow

import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';

import { theme, media, ContentBlock, H1, H2, Card } from 'bitcoincom-storybook';

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;
  & > div > div {
    margin: ${theme.spacing.unit}px auto !important;
  }

  & > div > div > div {
    max-width: unset;
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
      heroImage={data.heroImage}
      hero={
        <StyledContentBlock>
          <H1 contrast>Tutorials</H1>
          <H2 style={{ color: theme.palette.primary.main }}>
            Real world examples to learn from and bootstrap your next Bitcoin
            Cash project
          </H2>
        </StyledContentBlock>
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
