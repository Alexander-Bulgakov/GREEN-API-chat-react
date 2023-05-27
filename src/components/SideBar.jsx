import React from 'react';
import { styled } from 'styled-components';
import Navbar from './Navbar';
import ContactInputGroup from './ContactInputGroup';
import ContactsList from './ContactsList';

const StyledSideBar = styled.div`
  background-color: white;
  flex: 1;
  height: 100%;
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <Navbar />
      <ContactInputGroup />
      <ContactsList />
    </StyledSideBar>
  );
};

export default SideBar;
