import React from 'react';
import { contacts, activeContact, setActiveContact } from '../store/slices/messageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

const StiledListItem = styled.li`
  display: block;
  height: 2em;
  border-bottom: solid 1px #f0f2f5;
  &:hover {
    background-color: #f0f2f5;
    cursor: pointer;
  }
`;

const ContactsList = () => {
  const storeContacts = useSelector(contacts);
  const dispatch = useDispatch();
  console.log(storeContacts);

  const handleChange = (e, id) => {
    console.log(id);
    dispatch(setActiveContact(id));
  };

  return (
    <ul>
      {storeContacts.length === 0
        ? 'Список контактов'
        : storeContacts.map((contact) => (
            <StiledListItem
              key={contact.id}
              onClick={(e) => handleChange(e, contact.id)}
            >
              {contact.phoneNumber}
            </StiledListItem>
          ))}
    </ul>
  );
};

export default ContactsList;
