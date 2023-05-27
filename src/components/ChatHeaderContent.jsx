import React from 'react';
import { styled } from 'styled-components';
import { StyledButton } from './ChatInputPannel';
import { useDispatch } from 'react-redux';
import { receiveNotification } from '../store/slices/chatSlice';

const StyledChatHeaderContent = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
`;

const ChatHeaderContent = ({ phone }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(receiveNotification());
  };

  return (
    <StyledChatHeaderContent>
      <span>{phone}</span>
      <StyledButton onClick={handleClick}>Получить</StyledButton>
    </StyledChatHeaderContent>
  );
};

export default ChatHeaderContent;
