// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Nav, Footer } from 'bitcoincom-universal';
import { StaticQuery, graphql } from 'gatsby';

import HelmetPlus from 'components/HelmetPlus';
import NavBar from 'components/NavBar';
import ShareFooter from 'components/ShareFooter';
import { theme } from 'bitcoincom-storybook';
import Img from 'gatsby-image';
import { GlobalStyle } from './globalStyle';

type Props = {
  children: React.Node,
  location: Object,
  heroImage: any,
  hero: ?React.Node,
};

type Data = {
  site: { siteMetadata: { title: string } },
};

const TopWrap = styled.div`
  position: relative;
  background: ${props => props.background && theme.palette.background.dark};
`;

const DefaultLayout = ({ children, location, heroImage, hero }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: Data) => (
      <>
        <HelmetPlus
          title={data.site.siteMetadata.title}
          description="bitcoin.com developer platform, sdk and resources.  Build on Bitcoin Cash (BCH)"
          location={location}
        >
          <meta charSet="utf-8" />
        </HelmetPlus>

        <GlobalStyle />
        <TopWrap background={heroImage !== null}>
          {heroImage && heroImage.childImageSharp && (
            <Img
              imgStyle={{ objectPosition: 'top center' }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              fluid={heroImage.childImageSharp.fluid}
            />
          )}
          <Nav locale="en" contrast showLang={false} />
          <NavBar pathname={location ? location.pathname : ''} />
          {hero && hero}
        </TopWrap>
        {children}
        <ShareFooter location={location} />
        <Footer locale="en" />
      </>
    )}
  />
);

export default DefaultLayout;
