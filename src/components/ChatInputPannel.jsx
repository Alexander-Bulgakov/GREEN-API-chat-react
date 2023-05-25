import React, { useState } from 'react';
import { styled } from 'styled-components';
import { sendMessage, activeContact } from '../store/slices/messageSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledChatInputPannel = styled.div`
  display: ${(props) => (!!props.contact ? 'block' : 'none')};
  bottom: 0;
  left: 0;
  height: 62px;
  padding: 10px 5px;
  background-color: #f0f2f5;
  width: 100%;
`;

const StyledSendMessageForm = styled.form`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMessageInput = styled.input`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
  margin-right: 1em;
  padding: 5px;
`;

const StyledSendButton = styled.button`
  background-color: white;
  height: 100%;
  border-radius: 0.5em;
  padding: 5px;
`;

const ChatInputPannel = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const contact = useSelector(activeContact);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    if (!!text) {
      dispatch(sendMessage(text));
      setText('');
    }
  };

  return (
    <StyledChatInputPannel contact={contact}>
      <StyledSendMessageForm onSubmit={handleSubmit}>
        <StyledMessageInput
          type="text"
          onChange={handleChange}
          value={text}
        />
        <StyledSendButton type="submit">Отправить</StyledSendButton>
      </StyledSendMessageForm>
    </StyledChatInputPannel>
  );
};

export default ChatInputPannel;
