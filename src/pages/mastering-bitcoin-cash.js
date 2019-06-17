// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';
import MasteringBitcoinCashAttribution from 'components/MasteringBitcoinCashAttribution';
import {
  theme,
  ContentBlock,
  H1,
  H2,
  H3,
  OL,
  Link,
} from 'bitcoincom-storybook';

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
        <ContentBlock>
          <H1 contrast>Mastering Bitcoin Cash</H1>
          <H2 style={{ color: theme.palette.primary.main }}>
            Build a foundation of knowledge
          </H2>
        </ContentBlock>
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
        <MasteringBitcoinCashAttribution />
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
