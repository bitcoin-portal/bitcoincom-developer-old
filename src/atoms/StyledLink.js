// @flow
import * as React from 'react';

import styled from 'styled-components';
import { Link } from 'bitcoincom-storybook';

const StyledLink = styled(Link)`
  display: inline !important;
  line-height: unset !important;
`;

type Props = {
  children: React.Node,
  text?: string,
  to: string,
  href?: string,
  subtle?: ?boolean,
};

const StyledA = (props: Props) => <StyledLink as="a" {...props} />;

class SmartLink extends React.PureComponent<Props> {
  render() {
    const { children, text, ...rest } = this.props;
    const { to, href } = rest;

    const patternInternal = /^\/(?!\/)/;
    const patternStaticAsset = /\/static\//g;

    const internal =
      patternInternal.test(to) || patternInternal.test(href || '');
    const isAsset = patternStaticAsset.test(href || '');

    if (isAsset || !internal) {
      return (
        <StyledA href={to || href} target="_blank" {...rest}>
          {text || children}
        </StyledA>
      );
    }

    // Use gatsby-link for internal/app pages, and <a> for external and assets
    return (
      <StyledLink to={to || href} {...rest}>
        {text || children}
      </StyledLink>
    );
  }
}
export { SmartLink };

export default StyledLink;
