import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Button1 = styled.button`
  background-color: #5CAE4E;
  font-size: 32px;
  font-weight: bold;
  color: black;
  padding: 10px;
  border: none;
  margin: 0 5px 5px 5px;
  border-radius: 8px;
  width:210px; 
  height:185px; 
  transition: 0.5s;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

`;

const Box = styled.div`
   width:170px; 
   height:233px; 
   background-color:#D9D9D9; 
   margin: 0 5px 5px 5px;
   border-radius: 8px;
   transition: 0.5s;
   padding: 20px;
   font-size: 16px;

`;


const Button2 = styled.button`
  background-color: #FF8A70;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 8px;
  width:210px; 
  height:204px; 
  margin: 0 5px 5px 5px;
  font-size: 36px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Button3 = styled.button`
  background-color: #F84D27;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin: 0 5px 5px 5px;
  width:210px; 
  height:202px; 
  transition: 0.5s;
  font-weight: bold;
  font-size: 36px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  span.bold-text {
    font-weight:bold;
    font-size:36px; 
  }

  span.emergency-text {
    font-size:25px; 
  }
`;


export default function LeftContainer() {
    return (
        <Container>
            <Button1>일시정지</Button1>
            <Box>ICECREAM...<br />ICECREAM...<br />ICECREAM...</Box>
            <Button2>로봇리셋</Button2>
            <Button3>
              <span className>긴급정지</span><br />
            </Button3>
        </Container>
    );
}
