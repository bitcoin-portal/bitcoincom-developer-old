// @flow

import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  border-radius: ${props => props.round ? '32px' : '3px'};
  cursor:pointer;
  touch-action: manipulation;
  background-color: ${props => props.primary ? props.theme.primary : props.theme.secondary};
  color: ${props => props.theme.background};
  border: none;
  padding: .65em 1.5em;
  font-size: ${16*1.1}px;
  font-weight: 800;
  width: fit-content;
  &:hover {
    background-color: ${props => props.primary ? props.theme.secondary : props.theme.secondaryContrast};
  }

`

export default Button;