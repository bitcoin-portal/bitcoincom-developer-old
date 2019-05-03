// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { theme, media, H2 } from 'bitcoincom-storybook';

const Wrapper = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  max-width: 300px;
  margin-right: ${theme.spacing.unit * 8}px;

  ${({ bottom = false }) => {
    if (bottom === false) return '';
    return css`
      align-self: flex-end;
    `;
  }};

  ${media.md`
    display: block;
  `}
`;

const Item = styled.a`
  display: block;
  color: ${({ selected = false }) =>
    selected ? theme.palette.primary.main : theme.palette.text.secondary};
  font-weight: ${({ selected = false }) => (selected ? 800 : 600)};
  text-decoration: none;
  padding: ${theme.spacing.unit}px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const SideBar = styled.div`
  box-sizing: border-box;
  border-left: ${theme.border.solid.light} ${theme.palette.primary.main};
  margin-top: ${theme.spacing.unit * 4}px;
  margin-bottom: ${theme.spacing.unit * 4}px;
  overflow: hidden;

  ${({ sticky = false }) => {
    if (sticky === false) return '';
    return css`
      position: fixed;
      top: 72px;
    `;
  }};
`;

type Props = {
  chapters: Object,
  contentRef: Object,
};

class SideMenu extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      bottom: false,
    };

    this.wrapperRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.wrapperRef || !this.wrapperRef.current) return;

    const { y } = this.wrapperRef.current.getBoundingClientRect();
    const { sticky, bottom } = this.state;
    const { contentRef } = this.props;

    if (sticky === true && y >= 72) {
      this.setState({ sticky: false });
    }

    if (contentRef && contentRef.current) {
      const {
        y: contentY,
        height: contentHeight,
      } = contentRef.current.getBoundingClientRect();
      if (
        sticky === true &&
        Math.abs(contentY) > contentHeight - window.innerHeight
      ) {
        this.setState({ sticky: false, bottom: true });
      }

      if (
        bottom === true &&
        Math.abs(contentY) <= contentHeight - window.innerHeight
      ) {
        this.setState({ bottom: false, sticky: true });
      }

      if (
        sticky === false &&
        y < 72 &&
        Math.abs(contentY) <= contentHeight - window.innerHeight
      ) {
        this.setState({ sticky: true });
      }
    }
  }

  render() {
    const { chapters } = this.props;
    const { sticky, bottom } = this.state;

    return (
      <Wrapper ref={this.wrapperRef} bottom={bottom}>
        <H2>Chapters</H2>
        <SideBar sticky={sticky}>
          {chapters.map(chapter => (
            <Item
              key={`${chapter.node.frontmatter.slug}-${
                chapter.node.frontmatter.chapter
              }`}
              href={chapter.node.fields.slug}
              selected={
                typeof window !== 'undefined' &&
                typeof window.location.pathname !== 'undefined' &&
                window.location.pathname === chapter.node.fields.slug
              }
            >
              {chapter.node.frontmatter.chapter}.{' '}
              {chapter.node.frontmatter.title}
            </Item>
          ))}
        </SideBar>
      </Wrapper>
    );
  }
}

export default SideMenu;
