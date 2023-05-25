import React from "react";
import { styled } from "styled-components";
import SideBar from "./SideBar";
import Chat from "./Chat";

const StyledWrapper = styled.div`
  height: 95%;
  width: 85%;
  z-index: 100;
  background-color: #f0f2f5;
  display: flex;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

const ChatWrapper = () => {
  return (
    <StyledWrapper>
      <SideBar />
      <Chat />
    </StyledWrapper>
  );
};

export default ChatWrapper;
