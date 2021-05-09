// @flow
import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FaAngleLeft } from 'react-icons/fa';

import HelmetPlus from 'components/HelmetPlus';
import DefaultLayout from 'components/layouts/DefaultLayout';

import StyledLink from 'atoms/StyledLink';

import {
  theme,
  ContentBlock,
  H1,
  H3,
  Markdown,
} from '@bitcoin-portal/bitcoincom-storybook';

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;
  & > div > div {
    margin: ${theme.spacing.unit}px auto !important;
  }

  & > div > div > div {
    max-width: unset;
    text-align: left;
  }
`;

type Props = {
  data: Object,
  location: Object,
};

const InsightTemplate = (props: Props) => {
  const { data, location } = props;
  const insight = data.markdownRemark;

  return (
    <DefaultLayout
      location={location}
      hero={
        <StyledContentBlock>
          <StyledLink to="/insights">
            <H3 contrast>
              <FaAngleLeft /> Insights
            </H3>
          </StyledLink>

          <H1 contrast>{insight.frontmatter.title}</H1>
        </StyledContentBlock>
      }
    >
      <HelmetPlus
        location={location}
        title={`${insight.frontmatter.title} - ${data.site.siteMetadata.title}`}
        keywords={[
          `${insight.frontmatter.title}`,
          'bitcoin cash tutorial',
          'bitcoin cash example',
        ]}
      />
      <StyledContentBlock>
        <Markdown htmlAst={insight.htmlAst} />
      </StyledContentBlock>
    </DefaultLayout>
  );
};

export default InsightTemplate;

export const query = graphql`
  query InsightQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        author
      }
      fields {
        slug
      }
    }
  }
`;
