import { React, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MenuGrid from "../../components/MenuGrid/MenuGrid";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button1 = styled.button`
background-color: ${props => props.clicked ? '#CCCCCC' : '#E6E6E6'};
font-size: 24px;
color: ${props => props.clicked ? 'black' : '#737373'};
height: 48px;
width: 160px;
margin: 48px 8px 0 54px;
border: none;
transition: 0.5s;
border-radius:8px;
font-weight: ${props => props.clicked ? 'bold' : 'normal'};

&:focus {
  outline:none; 
 }
 
 &:hover {
  cursor:pointer; 
 }
`;
const Button2 = styled.button`
background-color: ${props => props.clicked ? '#CCCCCC' : '#E6E6E6'};
font-size: 24px;
color: ${props => props.clicked ? 'black' : '#737373'};
height: 48px;
width: 160px;
margin: 48px 8px 0 0;
border: none;
transition: 0.5s;
border-radius:8px;
font-weight: ${props => props.clicked ? 'bold' : 'normal'};

&:focus {
  outline:none; 
 }
 
 &:hover {
  cursor:pointer; 
 }
`;

const Button3 = styled.button`
background-color: ${props => props.clicked ? '#CCCCCC' : '#E6E6E6'};
font-size: 24px;
color: ${props => props.clicked ? 'black' : '#737373'};
height: 48px;
width: 160px;
margin: 48px 0 0 0;
border: none;
transition: 0.5s;
border-radius:8px;
font-weight: ${props => props.clicked ? 'bold' : 'normal'};

&:focus {
  outline:none; 
 }
 
 &:hover {
  cursor:pointer; 
 }
`;

const Button4 = styled.button`
background-color: #E6E6E6; 
font-size: 24px;
color: black;
height: 48px;
width: 265px;
margin: 48px 0 0 403px;
border: none;
transition: 0.5s;
border-radius:8px;

`;

export default function Menu() {
  const [isButton1Clicked, setButton1Clicked] = useState(true);
  const [isButton2Clicked, setButton2Clicked] = useState(false);
  const [isButton3Clicked, setButton3Clicked] = useState(false);

  const handleButton1Click = () => {
    if (!isButton1Clicked) {
      setButton1Clicked(true);
      setButton2Clicked(false);
      setButton3Clicked(false);
  }};

const handleButton2Click = () => {
  if (!isButton2Clicked) {
    setButton1Clicked(false);
    setButton2Clicked(true);
    setButton3Clicked(false);
}};

const handleButton3Click = () => {
  if (!isButton3Clicked) {
    setButton1Clicked(false);
    setButton2Clicked(false);
    setButton3Clicked(true);
}};

  const navigate = useNavigate();

    return (
      <div>
      <Container>
          <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>커피</Button1>
          <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>티&라떼</Button2>
          <Button3 clicked={isButton3Clicked} onClick={handleButton3Click}>아이스크림</Button3>
          <Button4 onClick={() => navigate('/addmenu')}>메뉴추가</Button4>
      </Container>
      </div>
      );
  }