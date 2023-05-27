import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../store/slices/chatSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/chatSlice';

const StyledNavBar = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f2f5;
  height: 3em;
`;

const StyledNavBarHeader = styled.h3`
  font-weight: bold;
`;

const StyledButton = styled.button`
  background-color: #00a884;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.3em 0.8em;
  color: black;
`;

const Navbar = () => {
  const user = useSelector(getUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <StyledNavBar>
      <StyledNavBarHeader>idInstance: {user.idInstance}</StyledNavBarHeader>
      <StyledButton onClick={handleLogout}>Выйти</StyledButton>
    </StyledNavBar>
  );
};

export default Navbar;
