// @flow
import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import HelmetPlus from 'components/HelmetPlus';
import DefaultLayout from 'components/layouts/DefaultLayout';
import MasteringBitcoinCashAttribution from 'components/MasteringBitcoinCashAttribution';

import StyledLink from 'atoms/StyledLink';

import spacing from 'styles/spacing';
import SideMenu from 'components/SideMenu';

import {
  theme,
  media,
  ContentBlock,
  H1,
  H2,
  Paragraph,
  Markdown,
} from 'bitcoincom-storybook';

type Props = {
  data: Object,
  location: Object,
};

const StyledContentBlock = styled(ContentBlock)`
  & > div > :nth-child(1) {
    align-self: stretch;
    display: flex;
    flex-basis: 20%;
    text-align: left;
    min-width: 300px;
    order: 0;
  }

  & > div > :nth-child(2) {
    flex-basis: 100%;
    overflow: auto;
    text-align: left;
    order: 1;
    padding-top: ${theme.spacing.unit * 2}px;
    ${media.md`
      padding-top: 0;
      flex-basis: 80%;
    `}
  }
`;
const ChapterNav = styled.div`
  display: flex;
  border-top: 2px solid ${props => props.theme.primary};
  padding-top: ${spacing.medium};
  justify-content: space-between;
  max-width: 820px;
`;

// TODO: DRY this AST holder div elsewhere
const ChapterHolder = styled.div`
  max-width: 820px;
  display: grid;
  grid-template-columns: 1fr;
  word-break: break-word;
  & > div {
    display: grid;
  }
  /* Remove margin from first element of markdown content */
  & > div > *:first-child {
    margin-top: 0 !important;
  }
`;

class ChapterTemplate extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  render() {
    const { data, location } = this.props;
    const chapterNode = data.markdownRemark;

    const allChapters = data.allMarkdownRemark.edges;
    const currentChapter = chapterNode.frontmatter.chapter;

    const prevChapter = allChapters.find(
      item => item.node.frontmatter.chapter === currentChapter - 1,
    );
    const nextChapter = allChapters.find(
      item => item.node.frontmatter.chapter === currentChapter + 1,
    );

    return (
      <DefaultLayout
        location={location}
        hero={
          <ContentBlock>
            <H1 contrast>Mastering Bitcoin Cash</H1>
            <MasteringBitcoinCashAttribution contrast />
          </ContentBlock>
        }
      >
        <HelmetPlus
          location={location}
          title={`${chapterNode.frontmatter.title} - ${data.site.siteMetadata.title}`}
          keywords={[
            'mastering bitcoin cash',
            `chapter ${currentChapter}`,
            'free book',
          ]}
        />
        <StyledContentBlock
          aside={
            <SideMenu chapters={allChapters} contentRef={this.contentRef} />
          }
        >
          <div>
            <div>
              <H2>
                {chapterNode.frontmatter.chapter}.{' '}
                {chapterNode.frontmatter.title}
              </H2>
            </div>
            <ChapterHolder>
              {chapterNode.htmlAst && (
                <Markdown htmlAst={chapterNode.htmlAst} />
              )}
            </ChapterHolder>
            <Paragraph monospace muted2>
              Chapter {chapterNode.frontmatter.chapter} End.
            </Paragraph>
            <ChapterNav>
              <div>
                {prevChapter && (
                  <StyledLink to={prevChapter.node.fields.slug}>
                    <Paragraph centerVertical monospace>
                      <FaAngleLeft /> Chapter{' '}
                      {prevChapter.node.frontmatter.chapter}
                    </Paragraph>
                  </StyledLink>
                )}
              </div>
              <div>
                {nextChapter && (
                  <StyledLink to={nextChapter.node.fields.slug}>
                    <Paragraph centerVertical monospace>
                      Chapter {nextChapter.node.frontmatter.chapter}{' '}
                      <FaAngleRight />
                    </Paragraph>
                  </StyledLink>
                )}
              </div>
            </ChapterNav>
          </div>
        </StyledContentBlock>
      </DefaultLayout>
    );
  }
}

export default ChapterTemplate;

export const query = graphql`
  query ChapterQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        chapter
        updatedAt(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: ASC }
      filter: { fields: { type: { eq: "chapter" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            chapter
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
