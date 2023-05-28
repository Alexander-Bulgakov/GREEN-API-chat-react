import React from 'react';
import { getContacts, setActiveContact } from '../store/slices/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

const StyledListItem = styled.li`
  display: block;
  height: 2em;
  border-bottom: solid 1px #f0f2f5;
  cursor: pointer;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const ContactsList = () => {
  const storeContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(setActiveContact(id));
  };

  return (
    <ul>
      {storeContacts.length === 0
        ? 'Список контактов'
        : storeContacts.map((contact) => (
            <StyledListItem
              key={contact.id}
              onClick={() => handleChange(contact.id)}
            >
              {contact.phoneNumber}
            </StyledListItem>
          ))}
    </ul>
  );
};

export default ContactsList;
