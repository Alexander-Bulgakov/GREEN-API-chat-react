import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../store/slices/chatSlice';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/chatSlice';

const StyledNavBar = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f2f5;
  height: 3em;
`;

const IdHeader = styled.h3`
  font-weight: bold;
`;

const StyledButton = styled.button`
  background-color: #00a884;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.3em 0.8em;
  color: black;
`;

export default function Navbar() {
  const user = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('clicked');
    dispatch(logout());

    navigate('/login');
  };
  return (
    <StyledNavBar>
      <IdHeader>idInstance: {user.idInstance}</IdHeader>
      {/* <StyledButton>Выйти</StyledButton> */}
      <StyledButton onClick={handleLogout}>Выйти</StyledButton>
    </StyledNavBar>
  );
}
