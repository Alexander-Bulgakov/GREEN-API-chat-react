import React from 'react';
import { styled } from 'styled-components';
import Navbar from './Navbar';
import InputGroup from './InputGroup';
import ContactsList from './ContactsList';

const StyledSideBar = styled.div`
  background-color: white;
  flex: 1;
  height: 100%;
`;

export default function SideBar() {
  return (
    <StyledSideBar>
      <Navbar />
      <InputGroup />
      <ContactsList />
    </StyledSideBar>
  );
}
