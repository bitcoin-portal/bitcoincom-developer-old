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
  OL,
  Link,
  Paragraph,
} from 'bitcoincom-storybook';

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;

  & > div > div {
    margin: ${theme.spacing.unit}px auto !important;
  }

  & > div > div > div {
    max-width: unset;
  }
`;

const Text = styled(Paragraph)`
  max-width: 800px;
  ${media.md`
  margin: 0 auto ${theme.spacing.unit * 4}px auto;
  `}
  & > a {
    display: inline;
  }
`;

type Props = {
  location: Object,
  data: { heroImage: any, allMarkdownRemark: any },
};

const Learn = ({ location, data }: Props) => {
  const chapters = data.allMarkdownRemark.edges;

  return (
    <DefaultLayout
      location={location}
      hero={
        <StyledContentBlock>
          <H1 contrast>Mastering Bitcoin Cash</H1>
          <H2 style={{ color: theme.palette.primary.main }}>
            Build a foundation of knowledge
          </H2>
        </StyledContentBlock>
      }
    >
      <HelmetPlus
        title={`Mastering Bitcoin Cash - book - ${
          data.site.siteMetadata.title
        }`}
        description="Learn all about Bitcoin Cash to take you from a beginner to expert."
        keywords={['mastering bitcoin cash', 'bitcoin cash book', 'free book']}
        location={location}
      />

      <ContentBlock>
        <Text size="tiny">
          The following is based on{' '}
          <Link href="https://github.com/bitcoinbook/bitcoinbook">
            Mastering Bitcoin
          </Link>{' '}
          by Andreas M. Antonopoulos{' '}
          <Link href="https://github.com/bitcoinbook/bitcoinbook#mastering-bitcoin---first-edition">
            First Edition
          </Link>{' '}
          which is licensed under{' '}
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike
          </Link>
        </Text>
        <H2>Chapters</H2>
        <OL>
          {chapters.map(chapter => (
            <li
              key={`${chapter.node.frontmatter.slug}-${
                chapter.node.frontmatter.chapter
              }`}
            >
              <H3 key={chapter.node.frontmatter.slug}>
                <Link href={chapter.node.fields.slug}>
                  {chapter.node.frontmatter.title}
                </Link>
              </H3>
            </li>
          ))}
        </OL>
      </ContentBlock>
    </DefaultLayout>
  );
};

export default Learn;

export const query = graphql`
  query MasteringBookQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: ASC }
      filter: { fields: { type: { eq: "chapter" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            chapter
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
