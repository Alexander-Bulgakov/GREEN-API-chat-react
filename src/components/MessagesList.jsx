import React from 'react';
import { styled } from 'styled-components';

const StyledMessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const StyledMessage = styled.li`
  background-color: white;
  padding: 0.3em 1em;
  align-self: ${(props) => (props.side === 'send' ? 'end' : 'start')};
  border-radius: ${(props) => (props.side === 'send' ? '10px 0px 10px 10px' : '0px 10px 10px 10px')};
`;

const MessagesList = ({ messagesList }) => {
  return (
    <StyledMessagesList>
      {messagesList.length === 0
        ? 'Сообщений нет'
        : messagesList.map((message, index) => (
            <StyledMessage
              key={index}
              side={message.side}
            >
              {message.text}
            </StyledMessage>
          ))}
    </StyledMessagesList>
  );
};

export default MessagesList;
