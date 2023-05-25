import React from 'react';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  background-color: #00a884;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.3em 0.8em;
  color: black;
  &:hover {
    background-color: #02a698;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
