import React from 'react';
import { styled } from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatInputPannel from './ChatInputPannel';
import Messages from './Messages';

const StyledChat = styled.div`
  flex: 2.5;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #eae6df;
`;

const Chat = () => {
  return (
    <StyledChat>
      <ChatHeader />
      <Messages />
      <ChatInputPannel />
    </StyledChat>
  );
};

export default Chat;
