import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { activeContact } from '../store/slices/messageSlice';

const StyledChatHeader = styled.div`
  height: 3em;
  background-color: #f0f2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: solid 1px #d1d7db;
`;

const ChatHeader = () => {
  const user = useSelector(activeContact);
  return <StyledChatHeader>{!!user ? user.phoneNumber : ''}</StyledChatHeader>;
};

export default ChatHeader;