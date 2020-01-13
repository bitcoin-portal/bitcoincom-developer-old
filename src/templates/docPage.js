// @flow
import * as React from 'react';
import styled from 'styled-components';
import { graphql, push } from 'gatsby';

import HelmetPlus from 'components/HelmetPlus';
import DefaultLayout from 'components/layouts/DefaultLayout';

import StyledLink from 'atoms/StyledLink';
import Text from 'atoms/Text';
import H1 from 'atoms/H1';
import H2 from 'atoms/H2';
import Select from 'atoms/Select';

import spacing from 'styles/spacing';
import media from 'styles/media';

import { getTitleDisplay } from 'utils/formatting';
import { getIcon } from 'utils/icon-helpers';
import {
  Markdown,
  ContentBlock,
  theme,
} from '@bitcoin-portal/bitcoincom-storybook';

const SideNavLayout = styled.div`
  position: relative;
`;
const SideNavSticky = styled.div`
  position: sticky;
  top: 75px;
  display: grid;
  grid-template-rows: min-content max-content min-content;
  grid-gap: ${spacing.medium};
`;

const BreadCrumbLayout = styled.div`
  grid-area: breadcrumbs;
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: repeat(3, max-content);
  grid-gap: ${spacing.small};
  margin-bottom: 16px;
`;

const StyledContentBlock = styled(ContentBlock)`
  & > div > :nth-child(1) {
    align-self: stretch;
    display: flex;
    flex-basis: 20%;
    text-align: left;
    min-width: 250px;
    order: 0;
  }

  & > div > :nth-child(2) {
    flex-basis: 100%;
    overflow: auto;
    text-align: left;
    order: 1;
    padding-top: ${theme.spacing.unit * 2}px;
    ${media.medium`
      padding-top: 0;
      flex-basis: 80%;
    `}
  }
`;

const LinksLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  ${media.medium`
    grid-gap: 0;
  `};
`;
const NavFooter = styled.div`
  display: grid;
`;

type NavProps = {
  activeDoc: Object,
  docs: Object[],
};
const NavLinks = (props: NavProps) => {
  const { docs, activeDoc } = props;

  return (
    <LinksLayout>
      {docs.map(node => (
        <StyledLink
          key={node.node.fields.slug}
          to={node.node.fields.slug}
          isActive={node.node.fields.slug === activeDoc.fields.slug}
        >
          <Text monospace centerVertical size="small">
            {getIcon(node.node.frontmatter.icon)}
            &nbsp;
            {node.node.frontmatter.title}
          </Text>
        </StyledLink>
      ))}
    </LinksLayout>
  );
};

type Props = {
  data: Object,
  location: Object,
};

class DocTemplate extends React.PureComponent<Props> {
  changeDocs = event => {
    const pageTarget = {
      bitbox: '/bitbox/docs/getting-started',
      badger: '/badger/docs/getting-started',
      gui: '/gui/docs/getting-started',
      rest: '/rest/docs/getting-started',
      slp: '/slp/docs/js/getting-started',
      cashscript: '/cashscript/docs/getting-started',
    }[event.target.value];

    if (pageTarget) push(pageTarget);
  };

  render() {
    const { data, location } = this.props;
    const doc = data.markdownRemark;

    const relatedDocs = data.allMarkdownRemark.edges;

    return (
      <DefaultLayout location={location}>
        <HelmetPlus
          location={location}
          title={`${getTitleDisplay(doc.fields.product)}: ${
            doc.frontmatter.title
          } - ${data.site.siteMetadata.title}`}
          keywords={[
            `${doc.fields.product}`,
            `${doc.fields.product} documentation`,
            `${doc.fields.product} ${doc.frontmatter.title}`,
            `${doc.frontmatter.title}`,
            `${doc.frontmatter.title} documentation`,
            'developer resource',
            'documentation',
          ]}
        />
        <StyledContentBlock
          left
          aside={
            <SideNavLayout>
              <SideNavSticky>
                <StyledLink isActive to={`/${doc.fields.product}`}>
                  <H2 isTitle>{getTitleDisplay(doc.fields.product)}</H2>
                </StyledLink>
                <NavLinks docs={relatedDocs} activeDoc={doc} />

                <NavFooter>
                  <Select
                    onChange={this.changeDocs}
                    size="small"
                    value={doc.fields.product}
                  >
                    <option value="bitbox">{getTitleDisplay('bitbox')}</option>
                    <option value="badger">{getTitleDisplay('badger')}</option>
                    <option value="rest">{getTitleDisplay('rest')}</option>
                    <option value="gui">{getTitleDisplay('gui')}</option>
                    <option value="slp">{getTitleDisplay('slp')}</option>
                    <option value="cashscript">
                      {getTitleDisplay('cashscript')}
                    </option>
                  </Select>
                </NavFooter>
              </SideNavSticky>
            </SideNavLayout>
          }
        >
          <BreadCrumbLayout>
            <H1 centerVertical>{getIcon(doc.frontmatter.icon)}</H1>
            <H1>{doc.frontmatter.title}</H1>
          </BreadCrumbLayout>
          <Markdown htmlAst={doc.htmlAst} />
        </StyledContentBlock>
      </DefaultLayout>
    );
  }
}

export default DocTemplate;

export const query = graphql`
  query DocQuery($slug: String!, $product: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        icon
      }
      fields {
        product
        slug
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___ordinal] }
      filter: { fields: { type: { eq: "docs" }, product: { eq: $product } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            icon
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
