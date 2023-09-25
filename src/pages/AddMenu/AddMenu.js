import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import Photoupload from '../../assets/photoupload.png';

const Container = styled.div`
  width: 70%;
  display: flex;
  margin: 43px 51px 0 13px;
`;


const StyledInput = styled.input`
  font-size: 20px;
  background-color: #F6F6F6; 
  height: 62px;
  width: 441px;
  padding-left :29px; 
  border: 1px solid #CCCCCC;
  border-radius: 16px;

  &::placeholder { /* Chrome, Firefox, Opera, Safari */
  color: gray;
 }
`;

const Select = styled.select`
margin-left: 8px;
padding-left: 5px;
display:flex; 
color: black;
justify-content:center; 
align-items: center; 
font-size: 20px;
background-color: white;
border: 1px solid #CCCCCC;
border-radius: 16px;
width: 197px;
height: 62px;
padding-left :15px; 
  `;

const Box1 = styled.div`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 260px;
  height: 62px;
  border: 1px solid #CCCCCC;
  border-radius: 16px;
  margin-left: 10px;
  `;

  const Button1 = styled.button`
  font-size:20px; 
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 130px;
  height: 62px;
  border: none;
  margin-left: 44px;
  background-color:${props => props.clicked ? '#F0F2FB' : '#FFFFFF'};
  border-radius: 16px;
  transition: 0.5s;

  `;

  const Button2 = styled.button`
  font-size:20px; 
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 130px;
  height: 62px;
  border: none;
  margin-left: 44px;
  background-color:${props => props.clicked ? '#FDE9E5' : '#FFFFFF'};
  border-radius: 16px;
  transition: 0.5s;

  `;

  const Button3 = styled.button`
  width: 400px;
  height: 62px;
  background: #D9D9D9;
  border-radius: 16px;  border: none;
  transition: 0.5s;
  margin-left: 10px;
`;
const Label = styled.label`
font-size:20px; 
color: black;
margin-bottom: 5px;

`;
const Img = styled.img`
margin-top: 10px;
`;
export default function AddMenu() {
    const navigate = useNavigate();

    return (
        <Container>
            <StyledInput type="text" placeholder="메뉴명 입력" />
            <Select>
            <option value="category1">커피ㅤ</option>
            <option value="category2">티&라떼ㅤ</option>
            <option value="category3">아이스크림ㅤ</option>
            </Select> 
            <Box1>
                <Button1 onClick={() => console.log("아이스 버튼 클릭")}>아이스</Button1>  
                <Button2 onClick={() => console.log("핫 버튼 클릭")}>핫</Button2>  
            </Box1>
            <Button3> <Label>메뉴사진등록</Label> <Img src={Photoupload} /> </Button3>

        </Container>
      );
  }
