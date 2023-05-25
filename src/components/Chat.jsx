import React from 'react';
import { styled } from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatInputPannel from './ChatInputPannel';

const StyledChat = styled.div`
  flex: 2.5;
`;
const Chat = () => {
  return (
    <StyledChat>
      <ChatHeader />
      <ChatInputPannel />
    </StyledChat>
  );
};

export default Chat;
