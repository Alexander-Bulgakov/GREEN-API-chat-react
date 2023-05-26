import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { messages } from '../store/slices/messageSlice';
import MessagesList from './MessagesList';

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  z-index: 100;
  padding: 0.5em 1.5em;
`;

const Messages = () => {
  const contactMessages = useSelector(messages);
  return (
    <StyledMessages>
      {!!contactMessages ? <MessagesList messagesList={contactMessages} /> : 'Сообщений нет'}
    </StyledMessages>
  );
};

export default Messages;
