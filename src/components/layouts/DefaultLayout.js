// @flow

import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Nav, Footer } from 'bitcoincom-universal';
import { StaticQuery, graphql } from 'gatsby';

import { defaultTheme } from 'styles/themes';
import './base.css';

import HelmetPlus from 'components/HelmetPlus';
import NavBar from 'components/NavBar';
import ShareFooter from 'components/ShareFooter';
import Favicon from 'images/favicon.png';

type Props = {
  children: React.Node,
  location: Object,
};

type Data = {
  site: { siteMetadata: { title: string } },
};

const Main = styled.div`
  position: relative;
`;

const DefaultLayout = ({ children, location }: Props) => (
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
        <ThemeProvider theme={defaultTheme}>
          <Main>
            <Nav locale="en" />
            <NavBar pathname={location ? location.pathname : ''} />
            {children}
            <ShareFooter location={location} />
            <Footer locale="en" />
          </Main>
        </ThemeProvider>
      </>
    )}
  />
);

export default DefaultLayout;
