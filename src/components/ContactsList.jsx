import React from 'react';
import { contacts } from '../store/slices/messageSlice';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const StiledListItem = styled.li`
  display: block;
  height: 2em;
  border-bottom: solid 1px #f0f2f5;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const ContactsList = () => {
  const storeContacts = useSelector(contacts);
  console.log(storeContacts);

  const handleChange = () => {};

  return (
    <ul>
      {storeContacts.length === 0
        ? 'Список контактов'
        : storeContacts.map((contact) => (
            <StiledListItem
              key={contact}
              onClick={handleChange}
            >
              {contact}
            </StiledListItem>
          ))}
    </ul>
  );
};

export default ContactsList;
