import React from "react";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #d1d7db;
  display: flex;
  flex-direction: column;
`;

const StyledContainerHeader = styled.div`
  position: fixed;
  top: 0;
  // z-index: -1;
  width: 100%;
  height: 127px;
  background-color: #00a884;
`;

const StyledBody = styled.div`
  height: 80vh;
  background-color: #d1d7db;
`;

const ChatContainer = ({ children }) => {
  return (
    <StyledContainer>
      <StyledContainerHeader />
      {children}
      {/* <StyledBody /> */}
    </StyledContainer>
  );
};

export default ChatContainer;
