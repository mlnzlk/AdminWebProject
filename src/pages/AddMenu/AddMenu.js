import React, { useState } from 'react';
import { Container, StyledInput, Select, Container2, Button1, Button2, Button3 } from './AddMenuStyles';
import { useNavigate } from 'react-router-dom';

import Photoupload from '../../assets/photoupload.png';

export default function AddMenu() {
    const navigate = useNavigate();
    const [isButton1Clicked, setButton1Clicked] = useState(true);
    const [isButton2Clicked, setButton2Clicked] = useState(false);

    const handleButton1Click = () => {
      setButton1Clicked(true);
      setButton2Clicked(false);
  };

  const handleButton2Click = () => {
      setButton1Clicked(false);
      setButton2Clicked(true);
  };

    return (
        <Container>
            <StyledInput type="text" placeholder="메뉴명 입력" />
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

        </Container>
      );
  }
