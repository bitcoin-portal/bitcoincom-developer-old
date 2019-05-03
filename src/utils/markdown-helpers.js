// @flow
import * as React from 'react';
import styled from 'styled-components';
import { defaultProps } from 'recompose';

import { BadgerButton, BadgerBadge } from 'badger-components-react';

import { SmartLink } from 'atoms/StyledLink';
import { H4Md, ImgMd, ThMd } from 'atoms/markdownAtoms';
import Pre from 'atoms/Pre';

import Caption from 'atoms/Caption';
import {
  theme,
  Code,
  UL,
  OL,
  Paragraph,
  H3,
  H2,
  H1,
  Card,
} from 'bitcoincom-storybook';
import spacing from 'styles/spacing';

const Text = styled(Paragraph)`
  max-width: unset;
`;

const Ul = styled(UL)`
  & > li {
    display: block;
  }
`;

const Ol = styled(OL)`
  & > li {
    display: block;
  }
`;
const StyledH3 = styled(H3)`
  margin-left: 0;
  text-align: left;
`;

const StyledCard = styled(Card)`
  max-width: unset;
  padding: ${theme.spacing.unit * 2}px;
  margin: ${theme.spacing.unit * 4}px 0;
  & > div > div {
    display: inline;
  }
  & > div > h3 {
    margin-left: 0;
    text-align: left;
  }
  & > div > div > i {
    display: contents;
  }
`;

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

type TipProps = {
  children: React.Node,
  nature: string,
};
const Tip = ({ children, nature = 'Tip' }: TipProps) => (
  <StyledCard title={nature} large>
    {children}
  </StyledCard>
);

type AnchorProps = {
  name: string,
  // eslint-disable-next-line
  children?: React.Node,
};

const Anchor = ({ name, children }: AnchorProps) => (
  <div>
    {/* eslint-disable-next-line */}
    <a id={name}>{children && children}</a>
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
const BadgerButtonTransform = (props: ButtonProps) => {
  const { price, repeattimeout, isrepeatable, watchaddress, ...rest } = props;
  const priceNumber = parseFloat(price);
  // eslint-disable-next-line
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
};

type BadgeProps = { price: string, repeatTimeout: string };
// All props from markdown come in as strings
const BadgerBadgeTransform = (props: BadgeProps) => {
  const { price, ...rest } = props;
  const priceNumber = parseFloat(price);
  return <BadgerBadge price={priceNumber} {...rest} />;
};

export const standardTransforms = {
  p: Text,
  pre: CodePreSplitter,
  code: CodePreSplitter,
  th: ThMd,
  h1: H1,
  h2: H2,
  h3: StyledH3,
  h4: H4Md,
  a: SmartLink,
  ul: Ul,
  ol: Ol,
  li: 'li',
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
