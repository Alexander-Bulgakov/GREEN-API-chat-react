import React from 'react';
import { contacts, activeContact, setActiveContact } from '../store/slices/chatSlice';
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
  console.log('storecontacts', storeContacts);

  const handleChange = (id) => {
    console.log(id);
    console.log('storecontacts', storeContacts);

    dispatch(setActiveContact(id));
  };

  return (
    <ul>
      {storeContacts.length === 0
        ? 'Список контактов'
        : storeContacts.map((contact) => (
            <StiledListItem
              key={contact.id}
              onClick={() => handleChange(contact.id)}
            >
              {contact.phoneNumber}
            </StiledListItem>
          ))}
    </ul>
  );
};

export default ContactsList;
