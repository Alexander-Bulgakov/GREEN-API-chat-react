import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  padding: 0.2em 0.3em;
  border: 1px solid #bcbdbe;
  border-radius: 5px;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    transition: border-color 0.1s linear;
    border-color: #dee5fb;
    box-shadow: 1px 1px 5px #dee5fb;
  }
`;

const FormInput = ({ placeholder, type }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
    />
  );
};

export default FormInput;
