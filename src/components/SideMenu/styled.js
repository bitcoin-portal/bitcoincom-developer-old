import styled, { css } from 'styled-components';
import theme, { media } from '../../../theme';

export const Wrapper = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  max-width: 250px;
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

export const Item = styled.a`
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

export const SideBar = styled.div`
  padding-left: ${theme.spacing.unit * 2}px;
  box-sizing: border-box;
  border-left: ${theme.border.solid.light} ${theme.palette.primary.main};
  margin-top: ${theme.spacing.unit * 4}px;
  margin-bottom: ${theme.spacing.unit * 4}px;
  overflow: hidden;
  max-width: 250px;

  ${({ sticky = false }) => {
    if (sticky === false) return '';
    return css`
      position: fixed;
      top: 72px;
    `;
  }};
`;
