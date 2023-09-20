import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Limage from '../../assets/Logo.png';
import Bimage from '../../assets/Background.png';

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 882px;
  width: 1440px;
  background-image: url(${Bimage});
`;
const FormContainer = styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
margin-top: 140px ;

`;

const StyledInput = styled.input`
  font-size: 24px;
  background-color: white; 
  height: 75px;
  width: 368px;
  margin: 7.5px auto;
  padding-left :15px; 
  border-radius: 12px;

  &::placeholder { /* Chrome, Firefox, Opera, Safari */
  color: lightgray;
 }
 
  border: none

`;

const StyledButton = styled.button`
background-color: #F84D27; 
color: white; 
font-size: 32px;
height: 75px;
width: 384px;
margin: 25px 0 0 0;
border: none;
transition: 0.5s;
border-radius: 12px;
font-weight: bold;

&:hover {
  background-color: lightgray;
  cursor: pointer;
}

`;

const StyledImage = styled.img` 

  margin: 234px 0 0 0px;
`;

export default function LogIn() {
    const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직
    // ...

    // Main 페이지로 리디렉션
    navigate('/CleaningMode');
  };

  return (
    <Container>
    <FormContainer>
        <StyledInput type="text" placeholder="ID" />
        <StyledInput type="password" placeholder="Password" />
        <StyledButton onClick={handleLogin}>
            LOGIN
        </StyledButton>
    </FormContainer>
    <StyledImage src={Limage} /> 
    </Container>
  );
}

