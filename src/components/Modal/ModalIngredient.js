import React, { useState } from 'react';
import styled from 'styled-components';

import CheckboxGroup from "../Checkbox/CheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";

import Close from '../../assets/close.png';

const ModalIngredient = ({ closeModal }) => {

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
  
  const [Ingredients, setIngredients] = useState([""]);

    return (
      <>
        
        <Container1>
          <ModalBlock>
            <Button4 onClick={() => closeModal(false)}> 
                <img style={{width: "36px", height: "36px", margin: "-10px 0px 0px 690px"}} src={Close} />
            </Button4> 
            <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>베이스 {isButton1Clicked && <Box1/>} </Button1>
            <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}> 시럽 {isButton2Clicked && <Box1/>} </Button2>          
            <Button3 clicked={isButton3Clicked} onClick={handleButton3Click}>토핑 {isButton3Clicked && <Box1/>} </Button3>          
         
            <Box2></Box2>

            <Container2>     {/* Container2 : 체크박스 들어있는 컨테이너, 여기에 체크박스부분 구현 */}
              <CheckboxGroup
                values={Ingredients}
                onChange={setIngredients}
              >
                <Checkbox value="choco">초코</Checkbox> <br/>
                <Checkbox value="vanilla">바닐라</Checkbox> <br/>
                <Checkbox value="mint">민트</Checkbox> <br/>

              </CheckboxGroup>
            </Container2>    
                
            <Container3>    {/*  Container3 : 체크박스 박스들, 확인버튼 들어가는 컨테이너*/} 
                <Container4>
                [{Ingredients.join(" ")}]을 좋아하시군요!
                </Container4>   {/*  Container4 : 체크박스 체크시 하단에 뜨는 박스들 들어가는 컨테이너*/} 
                <Button5 onClick={() => closeModal(false)} >확인</Button5>       {/* 체크박스 선택 하나라도 하면 버튼,글씨색상 변화되도록 */} 
            </Container3>
          
          </ModalBlock>


          <Background />
        </Container1>
      </>
    );
  }

const Container1 = styled.div`
    position: fixed;
    width: 1440px;
    height: 882px;
    z-index: 100;
    top: 10px;
    left: 10px;

    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;    
    align-items: center;
    
`;

const Background = styled.div`
    position: fixed;
    width: 1440px;
    height: 882px;
    background-color: rgba(255,255,255,0.15);
    background: #383838;
    opacity: 0.5;

`;

const ModalBlock = styled.div`

    position: absolute;
    top: 6.5rem;
    border-radius: 20px;
    padding: 1.5rem;
    background-color: white;
    color: black;
    width: 730px;
    height: 615px;    
    box-shadow: 1px 1px 1px 1px gray;
    z-index:101;
`;

const Button1 = styled.button`
font-size: 24px;
background: none;
height: 65px;
width: 123px;
margin: -8px 0 0 11px;
border: none;
 &:hover {
  cursor:pointer; 
 }
`;
const Button2 = styled.button`
font-size: 24px;
background: none;
height: 65px;
width: 123px;
margin: -8px 0 0 11px;
border: none;
 &:hover {
  cursor:pointer; 
 }
`;
const Button3 = styled.button`
font-size: 24px;
background: none;
height: 65px;
width: 123px;
margin: -8px 0 0 11px;
border: none;
 &:hover {
  cursor:pointer; 
 }
`;

const Box1 = styled.div`
display:flex; 
justify-content:center; 
align-items:center; 
width: 123px;
height: 8px;
background: #808080;
margin: 10px 0 0 -5px;
  `;

  const Button4 = styled.button`
  background: none;

  margin: 0px 0 0 11px;
  border: none;
   &:hover {
    cursor:pointer; 
   }
  `;

  const Box2 = styled.div`
display:flex; 
justify-content:center; 
align-items:center; 
width: 778px;
height: 2px;
background: #D9D9D9;
margin: -7px 0 0 -24px;

  `;


  export const Container2 = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column; 
  width: 778px;
  height: 390px;
  margin: -2px 0 0 -24px;
  
  `;

  export const Container3 = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column; 

  width: 778px;
  height: 190px;
  margin: -2px 0 0 -24px;
  background: #F6F6F6;
  border-radius: 0 0 20px 20px;
  `;

  export const Container4 = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 778px;
  height: 93px;
  `;

  const Button5 = styled.button`
  font-size: 24px;
  background: #D9D9D9;
  height: 82px;
  width: 720px;
  margin: -10px 0 0 0;
  border: none;
  border-radius: 16px;
   &:hover {
    cursor:pointer; 
   }
  `;

export default ModalIngredient