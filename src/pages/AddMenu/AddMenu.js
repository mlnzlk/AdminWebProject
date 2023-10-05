import React, { useState } from 'react';
import { Container1, ContainerI, ContainerH, ContainerList, Input1, Select, Container2, Button1, Button2, Button3, Button4, Button5 } from './AddMenuStyles';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Photoupload from '../../assets/photoupload.png';
import Plus from '../../assets/plus.png';

import ModalIngredient from '../../components/Modal/ModalIngredient';
import ModalNumber_Won from '../../components/Modal/ModalNumber_Won';
import ModalNumber_ml from '../../components/Modal/ModalNumber_ml';

export default function AddMenu() {
    const navigate = useNavigate();
    const [isButton1Clicked, setButton1Clicked] = useState(true);
    const [isButton2Clicked, setButton2Clicked] = useState(false);
    const [ingredientModalOpen, setIngredientModalOpen] = useState(false);
    const [numberWonModalOpen, setNumberWonModalOpen] = useState(false);
    
    const handleButton1Click = () => {
      setButton1Clicked(true);
      setButton2Clicked(false);
  };

  const handleButton2Click = () => {
      setButton1Clicked(false);
      setButton2Clicked(true);
  };


    return (
      <div>
        <Container1>
            <Input1 type="text" placeholder="메뉴명 입력" />
            <Select>
            <option value="category1">커피ㅤ</option>
            <option value="category2">티&라떼ㅤ</option>
            <option value="category3">아이스크림ㅤ</option>
            </Select> 
            <Container2>
                <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>아이스</Button1>
                <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>핫</Button2>  
            </Container2>
            <Button3 style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}> 메뉴사진등록 
            <div style={{marginTop: "5px", marginLeft: "52px"}}>
              <img src={Photoupload} /> 
            </div>
            </Button3>
        </Container1>
        { isButton1Clicked ? (<ContainerI>
            <label style={{margin: "0px 0px 0 25px", fontSize: '20px' }}> 추가 항목</label>
            <label style={{margin: "0px 8px 0px 461px", fontSize: '20px', fontWeight: "bold" }}> 8oz</label>
            <label style={{margin: "5px 110px 0px 0px", fontSize: '14px' }}> 233ml</label>
            <label style={{margin: "0px 8px 0px 0px", fontSize: '20px', fontWeight: "bold" }}> 14oz</label>
            <label style={{margin: "5px 110px 0px 0px", fontSize: '14px' }}> 433ml</label>
            <label style={{margin: "0px 8px 0px 0px", fontSize: '20px', fontWeight: "bold" }}> 20oz</label>
            <label style={{margin: "5px 0px 0px 0px", fontSize: '14px' }}> 600ml</label>
        </ContainerI>) : null }

          { isButton2Clicked ? (<ContainerH>
            <label style={{margin: "0px 0px 0 25px", fontSize: '20px' }}> 추가 항목</label>
            <label style={{margin: "0px 8px 0px 461px", fontSize: '20px', fontWeight: "bold" }}> 4oz</label>
            <label style={{margin: "5px 110px 0px 0px", fontSize: '14px' }}> 233ml</label>
            <label style={{margin: "0px 8px 0px 0px", fontSize: '20px', fontWeight: "bold" }}> 10oz</label>
            <label style={{margin: "5px 110px 0px 0px", fontSize: '14px' }}> 433ml</label>
            <label style={{margin: "0px 8px 0px 0px", fontSize: '20px', fontWeight: "bold" }}> 16oz</label>
            <label style={{margin: "5px 0px 0px 0px", fontSize: '14px' }}> 600ml</label>
          </ContainerH>) : null }

        <ContainerList>
        
        </ContainerList>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Button4 onClick={() => setIngredientModalOpen(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img style={{margin: "0px 12px 0px 46px"}} src={Plus} /> 
              <label style={{margin: "0px 0px 0px 0px", fontSize: '20px', }}> 재료추가 </label>
            </div>
          </Button4>
          {ingredientModalOpen && <ModalIngredient closeModal={setIngredientModalOpen} />}
        </div>

        <label style={{margin: "10px 20px 0px 196px", fontSize: '20px', }}> 판매가 </label>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button5  style={{ marginRight: "10px"}} // 판매가1
          onClick={() => setNumberWonModalOpen(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <label style={{textAlign: "center", fontSize: '20px', }}> </label>
              <label style={{ fontWeight: "600", fontSize: '20px', margin:"0 0 3px 133px" }}> 원 </label>
            </div>
          </Button5>
          {numberWonModalOpen && <ModalNumber_Won closeModal={setNumberWonModalOpen} />}

          <Button5  style={{ marginRight: "10px"}} // 판매가2
          onClick={() => setNumberWonModalOpen(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <label style={{textAlign: "center", fontSize: '20px', }}> </label>
              <label style={{ fontWeight: "600", fontSize: '20px', margin:"0 0 3px 133px" }}> 원 </label>
            </div>
          </Button5>
          {numberWonModalOpen && <ModalNumber_Won closeModal={setNumberWonModalOpen} />}

          <Button5  style={{ marginRight: "10px"}} // 판매가3
          onClick={() => setNumberWonModalOpen(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <label style={{textAlign: "center", fontSize: '20px', }}> </label>
              <label style={{ fontWeight: "600", fontSize: '20px', margin:"0 0 3px 133px" }}> 원 </label>
            </div>
          </Button5>
          {numberWonModalOpen && <ModalNumber_Won closeModal={setNumberWonModalOpen} />}
        </div>
  

      </div>

      </div>

      );
  }

