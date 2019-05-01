// @flow
import * as React from 'react';
import styled from 'styled-components';
import { defaultProps } from 'recompose';

import { BadgerButton, BadgerBadge } from 'badger-components-react';

import { SmartLink } from 'atoms/StyledLink';
import {
  H1Md,
  H2Md,
  H3Md,
  H4Md,
  TextMd,
  UlMd,
  OlMd,
  ImgMd,
  ThMd,
} from 'atoms/markdownAtoms';
import Li from 'atoms/Li';
import Code from 'atoms/Code';
import Pre from 'atoms/Pre';
import Tip from 'atoms/Tip';
import Caption from 'atoms/Caption';

import spacing from 'styles/spacing';

type BasicProps = {
  children: React.Node,
};

// Short use inline custom component, long use codeblock
const CodePreSplitter = ({ children }: BasicProps) => {
  if (children && children[0].length > 25) {
    return <Code fontSize={14}>{children}</Code>;
  }
  return <Pre>{children}</Pre>;
};

type AnchorProps = {
  name: string,
  children?: React.Node,
};
const Anchor = ({ name, children }: AnchorProps) => (
  <div>
    <a id={name}>{children}</a>
  </div>
);

const Spacer = styled.div`
  margin-top: ${props =>
    props.size === 'small' ? spacing.small : spacing.medium};
`;

type ButtonProps = {
  price: string,
  repeattimeout: string,
  isrepeatable: string,
  watchaddress: string,
};
// All props from markdown come in as strings
class BadgerButtonTransform extends React.PureComponent<ButtonProps> {
  render() {
    const {
      price,
      repeattimeout,
      isrepeatable,
      watchaddress,
      ...rest
    } = this.props;
    const priceNumber = parseFloat(price);
    const repeatTimeoutNumber = parseInt(repeattimeout);
    return (
      <BadgerButton
        price={priceNumber}
        repeatTimeout={repeatTimeoutNumber}
        watchAddress={watchaddress}
        isRepeatable={isrepeatable}
        {...rest}
      />
    );
  }
}

type BadgeProps = { price: string, repeatTimeout: string };
// All props from markdown come in as strings
class BadgerBadgeTransform extends React.PureComponent<BadgeProps> {
  render() {
    const { price, ...rest } = this.props;
    const priceNumber = parseFloat(price);
    return <BadgerBadge price={priceNumber} {...rest} />;
  }
}
export const standardTransforms = {
  p: TextMd,
  pre: CodePreSplitter,
  code: CodePreSplitter,
  th: ThMd,
  h1: H1Md,
  h2: H2Md,
  h3: H3Md,
  h4: H4Md,
  a: SmartLink,
  ul: UlMd,
  ol: OlMd,
  li: Li,
  img: ImgMd,
  tip: Tip,
  link: SmartLink,
  'image-caption': defaultProps({ center: true })(Caption),
  'table-caption': Caption,
  spacer: Spacer,
  anchor: Anchor,
  'badger-button': BadgerButtonTransform,
  'badger-badge': BadgerBadgeTransform,
};
