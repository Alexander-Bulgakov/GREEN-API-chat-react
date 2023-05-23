import React, { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";

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

const StyledButton = styled.button`
  height: 2rem;
  background-color: #88a6eb;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  &:hover {
    background-color: #6b92ed;
  }
`;

const Login = () => {
  const [idInstance, setidInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(idInstance, apiTokenInstance);
  };

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
          <label>
            <StyledInput
              type="text"
              placeholder="idInstance"
              onChange={(e) => setidInstance(e.target.value)}
              value={idInstance}
            />
          </label>
          <label>
            <StyledInput
              type="text"
              placeholder="apiTokenInstance"
              onChange={(e) => setApiTokenInstance(e.target.value)}
              value={apiTokenInstance}
            />
          </label>
          <StyledButton type="submit">Отправить</StyledButton>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
