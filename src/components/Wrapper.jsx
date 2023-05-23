import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-width: ${(props) => (props.width ? '80%' : '400px')};
  height: ${(props) => (props.height ? '95%' : 'auto')};
  background-color: white;
  padding: 2em 3em;
  border-radius: 0.8em;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  align-items: center;
  box-shadow: 1px 4px 13px 1px rgba(0, 0, 0, 0.25);
`;

const Wrapper = ({ children, width, height }) => {
  return (
    <StyledWrapper width={width} height={height}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
