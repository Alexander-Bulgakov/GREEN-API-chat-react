import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import { useDispatch } from 'react-redux';
import { setReqParameters } from '../store/slices/chatSlice';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../components/ChatContainer';
import Button from '../components/Button';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  padding: 0.2em 0.3em;
  border: 1px solid #bcbdbe;
  border-radius: 5px;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    transition: border-color 0.1s linear;
    border-color: #dee5fb;
    box-shadow: 1px 1px 5px #dee5fb;
  }
`;

const Login = () => {
  const [idInstance, setidInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setReqParameters({ idInstance, apiTokenInstance }));
    navigate('/');
  };

  return (
    <ChatContainer>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
          <label>
            <StyledInput
              type="text"
              placeholder="idInstance"
              onChange={(e) => setidInstance(e.target.value)}
              value={idInstance}
              required
            />
          </label>
          <label>
            <StyledInput
              type="text"
              placeholder="apiTokenInstance"
              onChange={(e) => setApiTokenInstance(e.target.value)}
              value={apiTokenInstance}
              required
            />
          </label>
          <Button type="submit">Отправить</Button>
        </StyledForm>
      </Wrapper>
    </ChatContainer>
  );
};

export default Login;
