import { React, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Close from '../../assets/close.png';

const ModalIngredient = ({ closeModal }) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
      closeModal(false);
      navigate('/menumanagement');
    };

    return (
      <>
        
        <Container1>
          <ModalBlock>
            <Button1 onClick={() => closeModal(false)}> 
                <img style={{width: "36px", height: "36px", margin: "-10px 0px 0px 860px"}} src={Close} />
            </Button1> 

            <Label style={{marginTop: "52px"}}>메뉴등록을 취소하시겠습니까?</Label>
            <Label style={{marginTop: "23px"}}>저장하지 않고 취소할 경우 입력된 정보가 삭제됩니다.</Label>     

            <Button2 onClick={handleClick}>저장하지 않고 나가기</Button2>
          
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
    width: 904px;
    height: 397px;  
    box-shadow: 1px 1px 1px 1px gray;
    z-index:101;
`;
const Label = styled.div`
display: flex;
justify-content: center;    
align-items: center;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
color: #000000;
`;

  const Button1 = styled.button`
  background: none;

  margin: 0px 0 0 11px;
  border: none;
   &:hover {
    cursor:pointer; 
   }
  `;

  const Button2 = styled.button`
  font-size: 32px;
  background: #D9D9D9;
  width: 666px;
  height: 85px;
  margin: 84px 0 0 119px;
  border: none;
  border-radius: 16px;
   &:hover {
    cursor:pointer; 
   }
  `;

export default ModalIngredient