import React, { useState } from 'react';
import { Container1, Container2, ContainerI, ContainerH, 
  Button1, Button2, Button3, Button4, Button5, Button6,Button7,Button8,Button9,Button10, Button11, ButtonD, 
  Input1, Select, 
  ContainerList,ListContent, } from './AddMenuStyles';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Photoupload from '../../assets/photoupload.png';
import Plus from '../../assets/plus.png';
import Drag from '../../assets/Drag.png';
import Del from '../../assets/close.png';

import ModalIngredient from '../../components/Modal/ModalIngredient';
import ModalNumber_Won from '../../components/Modal/ModalNumber_Won';
import ModalNumber_ml from '../../components/Modal/ModalNumber_ml';
import ModalCancelRegisterMenu from '../../components/Modal/ModalCancelRegisterMenu';
import ModalDeleteMenu from '../../components/Modal/ModalDeleteMenu';
import axios from 'axios';

export default function EditMenu() {
  const [menuName, setMenuName] = useState(''); // 메뉴 이름을 저장하는 상태

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져오는 GET 요청을 보냅니다.
    axios.get('여기에_귀하의_API_엔드포인트_주소를_입력')
      .then((response) => {
        // 데이터가 response.data에 있다고 가정합니다.
        setMenuName(response.data.name);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []); // 빈 종속성 배열은 컴포넌트가 마운트될 때 한 번만 실행됨을 의미합니다.

    const navigate = useNavigate();
    const [isButton1Clicked, setButton1Clicked] = useState(true);
    const [isButton2Clicked, setButton2Clicked] = useState(false);
    const [ingredientModalOpen, setIngredientModalOpen] = useState(false);
    
    // 각 판매가 버튼에 대해 별도의 모달 상태값 생성
    const [numberWonModalOpen1, setNumberWonModalOpen1] = useState(false);
    const [numberWonModalOpen2, setNumberWonModalOpen2] = useState(false);
    const [numberWonModalOpen3, setNumberWonModalOpen3] = useState(false);

    // 각 가격에 대한 상태값을 생성
    const [price1, setPrice1] = useState("");
    const [price2, setPrice2] = useState("");
    const [price3, setPrice3] = useState("");
    
    // 재료추가 모달창 상태값 생성
    const [ModalCancelRegisterMenuOpen, setModalCancelRegisterMenu] = useState(false);

    // 메뉴삭제 모달창 상태값 생성 -> 이 코드 메뉴수정.js에 옮기기
    const [ModalDeleteMenuOpen, setDeleteMenu] = useState(false);

    const handleButton1Click = () => {
      setButton1Clicked(true);
      setButton2Clicked(false);
    };

    const handleButton2Click = () => {
      setButton1Clicked(false);
      setButton2Clicked(true);
    };

    const handleClick = () => {
      navigate('/menumanagement');
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {

        // 선택한 파일을 처리하는 로직 추후에 추가하기
        
        console.log("선택한 파일:", selectedFile);
        setSelectedFile(selectedFile); // 파일 선택 시 selectedFile 상태 업데이트
      }
    };

    return (
      <div>
        <Container1>
        <Input1
          type="text"
          placeholder="메뉴명 입력"
          value={menuName} // Input1의 값은 menuName 상태로 설정
          onChange={(e) => setMenuName(e.target.value)} // 선택 사항: 입력 변경 처리
        />
            <Select>
            <option value="category1">커피ㅤ</option>
            <option value="category2">티&라떼ㅤ</option>
            <option value="category3">아이스크림ㅤ</option>
            </Select> 
            <Container2>
                <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>아이스</Button1>
                <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>핫</Button2>  
            </Container2>
            <div>
      {/* 파일 입력 필드 */}
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="fileInput"
        onChange={handleFileInputChange}
      />

      {/* 라벨 */}
      <label
        htmlFor="fileInput"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          cursor: 'pointer',
          background: '#D9D9D9', 
          padding: '15px',
          borderRadius: '16px',
          width: '230px',
          height: '34px',
          marginLeft: '5px',
        }}
      >
        {selectedFile ? selectedFile.name : '메뉴사진등록'}
        <div style={{ marginTop: '5px', marginLeft: '74px' }}>
          <img src={Photoupload} alt="Upload Icon" />
        </div>
      </label>
    </div>


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
            <label style={{margin: "0px 0px 0px 25px", fontSize: '20px' }}> 추가 항목</label>
            <label style={{margin: "0px 8px 0px 461px", fontSize: '20px', fontWeight: "bold" }}> 4oz</label>
            <label style={{margin: "5px 110px 0px 0px", fontSize: '14px' }}> 233ml</label>
            <label style={{margin: "0px 8px 0px 0px", fontSize: '20px', fontWeight: "bold" }}> 10oz</label>
            <label style={{margin: "5px 110px 0px 0px", fontSize: '14px' }}> 433ml</label>
            <label style={{margin: "0px 8px 0px 0px", fontSize: '20px', fontWeight: "bold" }}> 16oz</label>
            <label style={{margin: "5px 0px 0px 0px", fontSize: '14px' }}> 600ml</label>
          </ContainerH>) : null }

      <ContainerList
        style={{
          overflowY: 'auto',
          width: '1200px',
          maxHeight: '444px',
          scrollbarWidth: 'thin',
        }}
      >            {/* 이 안에 스크롤 가능한 내용을 넣으세요 */}
            <ListContent>
              <img style={{margin: "0 0 0 15px"}} src={Drag}/>  {/* 버튼으로? 수정하기 눌러서 드래그앤드롭 하도록 */}
              <label style={{marginLeft: "14px", fontFamily: "Pretendard", fontSize: '20px', width: "418px", height:"56px", background: "#FFFFFF", borderRadius: "8px", }}>  </label>
              <Button11> </Button11>
              <Button11> </Button11>
              <Button11> </Button11>
              <img style={{margin: "0 0 0 15px"}} src={Del}/> {/* 버튼으로 수정하기 : 눌러서 해당 컨텐츠 행 삭제해주도록 */}
              </ListContent>
              
            <ListContent> </ListContent>
            <ListContent> </ListContent>
            <ListContent> </ListContent>
            <ListContent> </ListContent>
            <ListContent> </ListContent>

            {/* ... */}
            </ContainerList>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Button4 onClick={() => setIngredientModalOpen(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img style={{margin: "0px 12px 0px 46px"}} src={Plus} /> 
              <label style={{margin: "0px 0px 0px 0px", fontFamily: "Pretendard", fontSize: '20px', }}> 재료추가 </label>
            </div>
          </Button4>
          {ingredientModalOpen && <ModalIngredient closeModal={setIngredientModalOpen} />}
        </div>

        <label style={{margin: "10px 20px 0px 196px", fontSize: '20px', }}> 판매가 </label>
        {/* 사용자가 모달창에서 숫자 입력 후 확인 누르면 해당 숫자가 price3에 표시되도록 */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button5  style={{ marginRight: "10px"}} // 판매가1
          onClick={() => setNumberWonModalOpen1(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <div style={{fontWeight: "600", margin:"0 0 3px 25px" , width: '100px', textAlign: "right", fontFamily: "Pretendard", fontSize: '20px' }}>
                {price1}
              </div>  
              <label style={{fontFamily: "Pretendard", fontWeight: "600", fontSize: '20px', margin:"0 0 3px 20px" }}>
                원 
              </label>
            </div>
        </Button5>
          {numberWonModalOpen1 && <ModalNumber_Won closeModal={setNumberWonModalOpen1} setValue={setPrice1}/>}

        <Button5  style={{ marginRight: "10px"}} // 판매가2
          onClick={() => setNumberWonModalOpen2(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <div style={{fontWeight: "600", margin:"0 0 3px 25px" , width: '100px', textAlign: "right", fontFamily: "Pretendard", fontSize: '20px' }}>
                {price2}
              </div>  
              <label style={{fontFamily: "Pretendard", fontWeight: "600", fontSize: '20px', margin:"0 0 3px 20px" }}>
                원 
              </label>
            </div>
        </Button5>
          {numberWonModalOpen2 && <ModalNumber_Won closeModal={setNumberWonModalOpen2} setValue={setPrice2}/>}

        <Button5  style={{ marginRight: "10px"}} // 판매가3.
          onClick={() => setNumberWonModalOpen3(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <div style={{fontWeight: "600", margin:"0 0 3px 25px" , width: '100px', textAlign: "right", fontFamily: "Pretendard", fontSize: '20px' }}>
                {price3}
              </div>  
              <label style={{fontFamily: "Pretendard", fontWeight: "600", fontSize: '20px', margin:"0 0 3px 20px" }}>
                원 
              </label>
            </div>
        </Button5>
          {numberWonModalOpen3 && <ModalNumber_Won closeModal={setNumberWonModalOpen3} setValue={setPrice3}/>}
        </div>
      </div> 

        {/* 웹소켓 테스트버튼 */}
        
        { isButton1Clicked ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>

          {/* 버튼D부분 코드 메뉴수정.js에 옮기기 */}
          <ButtonD onClick={() => setDeleteMenu(true)}> 메뉴삭제</ButtonD>
          {ModalDeleteMenuOpen && <ModalDeleteMenu closeModal={setDeleteMenu}/>}

          <Button6 style={{marginLeft: "416px"}}> 테스트 </Button6> 
          <Button6 style={{marginLeft: "10px"}}> 테스트 </Button6> 
          <Button6 style={{marginLeft: "10px"}}> 테스트 </Button6> 
          </div>
        ) : null }

        { isButton2Clicked ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button7 style={{marginLeft: "533px"}}> 테스트 </Button7> 
          <Button7 style={{marginLeft: "10px"}}> 테스트 </Button7>
          <Button7 style={{marginLeft: "10px"}}> 테스트 </Button7> 
        </div>
        ) : null }
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button8 onClick={() => setModalCancelRegisterMenu(true)}> 취소하기 </Button8> 
        {ModalCancelRegisterMenuOpen && <ModalCancelRegisterMenu closeModal={setModalCancelRegisterMenu} />}

        { isButton1Clicked ? (
          <Button9 onClick={handleClick}> 저장하기 </Button9> 
        ) : null }       
        
        { isButton2Clicked ? (
          <Button10 onClick={handleClick}> 저장하기 </Button10> 
        ) : null }

        </div>


        </div>
      );
  }

