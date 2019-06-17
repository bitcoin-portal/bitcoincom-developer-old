// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Container from 'components/Container';

import { theme } from 'bitcoincom-storybook';

const Main = styled.div`
  position: sticky;
  top: 0;
  background-color: #2d323b;
  z-index: 999;
  padding: ${theme.spacing.unit * 2}px;
  text-align: center;
`;

const NavLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavItem = styled(Link)`
  position: relative;
  color: ${theme.palette.text.contrast};
  text-decoration: none;
  padding: 0 ${theme.spacing.unit * 2}px;
  &:hover {
    color: ${props => props.theme.primary600};
  }

  ${props =>
    props.isactive === 'true' &&
    css`
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: ${theme.palette.primary.main};
        width: 100%;
        left: 0;
        bottom: -${theme.spacing.unit * 2}px;
      }
    `}
`;

type Props = {
  pathname: string,
};

// TODO: Better method of this to not have false positives like /tutorials/wormhole-3 triggering 2 tabs active
const developBaseUrls = [
  '/develop',
  '/bitbox',
  '/gui',
  '/rest',
  '/slp',
  '/faucets',
  '/badger',
];
const learnBaseUrls = [
  '/learn',
  '/tutorials',
  '/insights',
  '/mastering-bitcoin-cash',
];

class NavBar extends React.PureComponent<Props> {
  render() {
    const { pathname } = this.props;

    // final `//` is for SSR as it ads an extra `/` to path names
    const homeActive = pathname === '/' || pathname === '' || pathname === '//';
    const learnActive = learnBaseUrls.reduce(
      (prev, curr) => prev || pathname.includes(curr),
      false,
    );
    const developActive = developBaseUrls.reduce(
      (prev, curr) => prev || pathname.includes(curr),
      false,
    );
    const aboutActive = pathname.includes('/about');

    const docsActive = pathname.includes('/docs');

    // const faqActive = pathname.includes('/faq');
    return (
      <Main>
        <Container>
          <NavLayout>
            <NavItem to="/" isactive={homeActive.toString()}>
              Home
            </NavItem>
            <NavItem to="/learn" isactive={learnActive.toString()}>
              Learn
            </NavItem>
            <NavItem
              to="/develop"
              isactive={(
                developActive &&
                !learnActive &&
                !docsActive
              ).toString()}
            >
              Develop
            </NavItem>
            <NavItem
              to="/bitbox/docs/getting-started"
              isactive={docsActive.toString()}
            >
              Docs
            </NavItem>
            <NavItem to="/about" isactive={aboutActive.toString()}>
              About
            </NavItem>
          </NavLayout>
        </Container>
      </Main>
    );
  }
}

export default NavBar;
