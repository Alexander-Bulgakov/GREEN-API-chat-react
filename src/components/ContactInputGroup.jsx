import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/slices/chatSlice';

const StyledInputGroup = styled.form`
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.5em;
`;

const StyledButton = styled.button`
  background-color: #f0f2f5;
  height: 100%;
  padding: 0.2em 0.3em;
`;

const StyledInput = styled.input`
  background-color: #f0f2f5;
  height: 100%;
  border-radius: 0.5em;
`;

const ContactInputGroup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const reg = /[0-9]/g;
    e.target.value = reg.test(e.target.value.at(-1)) ? e.target.value : e.target.value.slice(0, -1);
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!phoneNumber) {
      const user = {
        id: new Date().getTime(),
        phoneNumber,
        messages: [],
      };
      dispatch(addContact(user));
      setPhoneNumber('');
    }
  };

  return (
    <StyledInputGroup onSubmit={handleSubmit}>
      <StyledInput
        pattern="[0-9]{11}"
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="7XXXXXXXXXX"
      />
      <StyledButton type="submit">Добавить номер</StyledButton>
    </StyledInputGroup>
  );
};

export default ContactInputGroup;
