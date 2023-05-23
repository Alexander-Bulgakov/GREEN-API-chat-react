import React from 'react';
import styled from 'styled-components';
// import Wrapper from './Wrapper';

const StyledContainer = styled.div`
  background-color: #dee5fb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
