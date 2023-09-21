import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import BackIcon from '../../assets/ion_chevron-back.png';
import Photoupload from '../../assets/photoupload.png';

const Container = styled.div`
  width: 70%;
  display: flex;
  margin: 43px 51px 0 13px;
`;

const Button1 = styled.button`
  background-color: white;
  border: none;
  margin: 5px 5px 5px 5px;
  border-radius: 8px;
  width: 52px;
  height: 52px;
  transition: 0.5s;
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

  const Button2 = styled.button`
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

  const Button3 = styled.button`
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

  const Button4 = styled.button`
  width: 400px;
  height: 62px;
  background: #D9D9D9;
  border-radius: 16px;  border: none;
  transition: 0.5s;
  margin-left: 10px;
  padding: 0 21px 0 51px;
`;
const Label = styled.label`
font-size:20px; 
color: black;
`;

export default function AddMenu() {
    const navigate = useNavigate();

    return (
        <Container>
            <Button1 onClick={() => navigate('/menumanagement')}> <img src={BackIcon} /> </Button1>
            <StyledInput type="text" placeholder="메뉴명 입력" />
            <Select>
            <option value="category1">커피ㅤ</option>
            <option value="category2">티&라떼ㅤ</option>
            <option value="category3">아이스크림ㅤ</option>
            </Select> 
            <Box1>
                <Button2 onClick={() => console.log("아이스 버튼 클릭")}>아이스</Button2>  
                <Button3 onClick={() => console.log("핫 버튼 클릭")}>핫</Button3>  
            </Box1>
            <Button4> <Label>메뉴사진등록</Label> <img src={Photoupload} /> </Button4>

        </Container>
      );
  }
