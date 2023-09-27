import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MenuGrid from "../../components/MenuGrid/MenuGrid";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button1 = styled.button`
background-color: #E6E6E6; 
font-size: 24px;
color: black;
height: 40px;
width: 134px;
margin: 100px 0 0 30px;
border: none;
transition: 0.5s;

`;
const Button2 = styled.button`
background-color: #E6E6E6; 
font-size: 24px;
color: black;
height: 40px;
width: 134px;
margin: 100px 0 0 13px;
border: none;
transition: 0.5s;

`;

const Button3 = styled.button`
background-color: #E6E6E6; 
font-size: 24px;
color: black;
height: 40px;
width: 134px;
margin: 100px 0 0 13px;
border: none;
transition: 0.5s;

`;

const Button4 = styled.button`
background-color: #B3B3B3; 
font-size: 32px;
color: black;
height: 90px;
width: 240px;
margin: 50px 0 0 460px;
border: none;
transition: 0.5s;

`;

export default function Menu() {
  const navigate = useNavigate();

    return (
      <div>
      <Container>
          <Button1>커피</Button1>
          <Button2>티&라떼</Button2>
          <Button3>아이스크림</Button3>
          <Button4 onClick={() => navigate('/addmenu')}>메뉴추가</Button4>
      </Container>
      </div>
      );
  }