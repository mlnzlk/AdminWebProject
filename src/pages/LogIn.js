import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/BTY_logo.png';

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 528px;
`;

const StyledInput = styled.input`
  font-size: 32px;
  color: black;
  background-color: #D9D9D9; 
  height: 75px;
  width: 368px;
  margin: 5px auto;
  padding-left :15px; 

  &::placeholder { /* Chrome, Firefox, Opera, Safari */
  color: black;
 }
 
  border: none

`;

const StyledButton = styled.button`
background-color: #989898; 
font-size: 32px;
height: 75px;
width: 384px;
margin: 30px 0 0 0;
border: none

`;

const StyledImage = styled.img` 
  width: 286px; 
  height: auto; 
  margin: 60px 0 0 60px;
`;

export default function LogIn() {
    const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직
    // ...

    // Main 페이지로 리디렉션
    navigate('/main');
  };

  return (
    <Container>
        <StyledInput type="text" placeholder="아이디" />
        <StyledInput type="password" placeholder="비밀번호" />
        <StyledButton onClick={handleLogin}>
           로그인
        </StyledButton>
        <StyledImage src={image} /> 
    </Container>
  );
}

