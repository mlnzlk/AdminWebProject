import React, { useState, useEffect } from 'react';
import { Container1, Container2, ContainerI, ContainerH, 
  Button1, Button2, Button3, Button4, Button5, Button6,Button7,Button8,Button9,Button10, Button11,ButtonD, ButtonX, 
  Input1, Select, 
  ContainerList,ListContent, } from './EditMenuStyles';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import Photoupload from '../../assets/photoupload.png';
import Plus from '../../assets/plus.png';
import Drag from '../../assets/Drag.png';
import Del from '../../assets/close.png';
 
import ModalIngredient_edit from '../../components/Modal_edit/ModalIngredient_edit';
import ModalNumber_Won_edit from '../../components/Modal_edit/ModalNumber_Won_edit';
import ModalNumber_ml_edit from '../../components/Modal_edit/ModalNumber_ml_edit';
import ModalCancelRegisterMenu_edit from '../../components/Modal_edit/ModalCancelRegisterMenu_edit';
import ModalDeleteMenu_edit from '../../components/Modal_edit/ModalDeleteMenu_edit';

import axios from 'axios';

export default function EditMenu() {
  const [socket, setSocket] = useState(null); // 상태변수로 socket 외부에서도 관리


  const [menuName, setMenuName] = useState('');
  const { productId } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [categoryId, setCategoryId] = useState('category1'); // 기본값을 'category1'로 설정

    const navigate = useNavigate();
    
    const [isButton1Clicked, setButton1Clicked] = useState(false);
    const [isButton2Clicked, setButton2Clicked] = useState(false);

    const [ingredientModalOpen, setIngredientModalOpen] = useState(false);
    
    // 각 판매가 버튼에 대해 별도의 모달 상태값 생성
    const [numberWonModalOpen1, setNumberWonModalOpen1] = useState(false);
    const [numberWonModalOpen2, setNumberWonModalOpen2] = useState(false);
    const [numberWonModalOpen3, setNumberWonModalOpen3] = useState(false);
    const [numberWonModalOpen4, setNumberWonModalOpen4] = useState(false);


    // 각 가격에 대한 상태값을 생성
    const [price1, setPrice1] = useState("");
    const [price2, setPrice2] = useState("");
    const [price3, setPrice3] = useState("");
    const [price4, setPrice4] = useState("");
    
    // 재료추가 모달창 상태값 생성
    const [ModalCancelRegisterMenuOpen, setModalCancelRegisterMenu] = useState(false);

    // 메뉴삭제 모달창 상태값 생성 -> 이 코드 메뉴수정.js에 옮기기
    const [ModalDeleteMenuOpen, setDeleteMenu] = useState(false);
    const handleButton1Click = () => {
      if (!isButton1Clicked) {
        setButton1Clicked(true);
        setButton2Clicked(false);
      }
    };
  
    const handleButton2Click = () => {
      if (!isButton2Clicked) {
        setButton1Clicked(false);
        setButton2Clicked(true);
      }
    };

    const handleClick = () => {
      navigate('/menumanagement');
    };

    const url = menuData && menuData.url;
    const fileName = url ? url.substring(url.lastIndexOf("/") + 1) : "";  
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
      const selectedFile = event.target.files[0];  // 파일 선택 후 selectedFile 상태를 업데이트하고, 라벨의 내용을 파일 이름으로 변경하도록 조건부 렌더링을 사용
      if (selectedFile) {

        // 선택한 파일을 처리하는 로직 추후에 추가하기
        
        console.log("선택한 파일:", selectedFile);
        setSelectedFile(selectedFile); // 파일 선택 시 selectedFile 상태 업데이트
      }
    };
    const [prices, setPrices] = useState([]);

    useEffect(() => {

      
      if (productId) {
        axios.get(`http://robros-alb-590302301.ap-northeast-2.elb.amazonaws.com/api/v1/recipes/${productId}`)
          .then((response) => {
            console.log(response.data); // 받아온 데이터 확인용 로그
            
            setMenuData(response.data);  // setMenuData로 데이터 설정
            setMenuName(response.data.name); // name 값을 menuName 상태 변수에 설정 -> <Input1> 컴포넌트가 렌더링될 때 초기값으로 해당 이름이 표시
          
            // categoryId 값을 설정
          if (response.data.categoryId === 1) {
            setCategoryId('category1');
          } else if (response.data.categoryId === 2) {
            setCategoryId('category2');
          } else if (response.data.categoryId === 3) {
            setCategoryId('category3');
          } else if (response.data.categoryId === 4) {
            setCategoryId('category4');
          }

                  // 첫 번째 레시피의 크기를 확인하고 초기 버튼 상태를 설정
                  if (response.data.recipes && response.data.recipes.length > 0) {
                    // Set prices based on recipe data
                    if (response.data.recipes[0].size === '8oz') {
                      setButton1Clicked(true);
                      setButton2Clicked(false);
                      setPrice1(response.data.recipes[0].price.toString());
                      setPrice2(response.data.recipes[1].price.toString());
                      setPrice3(response.data.recipes[2].price.toString());

                    } else if (response.data.recipes[0].size === '4oz') {
                      setButton1Clicked(false);
                      setButton2Clicked(true);
                      setPrice1(response.data.recipes[0].price.toString());
                      setPrice2(response.data.recipes[1].price.toString());
                      setPrice3(response.data.recipes[2].price.toString());

                    }
                  }
                })
                
                .catch((error) => console.error(`Error!!!: ${error}`));
            }

            

            const socketInstance = new WebSocket('ws://192.168.0.19:12345');

            // 연결이 열릴 때 실행될 이벤트 리스너
            socketInstance.onopen = function (event) {
              console.log('WebSocket 연결 성공');
                setSocket(socketInstance); // socket 상태 업데이트
        
            };
        
            // 메시지 수신 이벤트 리스너
            socketInstance.onmessage = function (event) {
              console.log(`Received message from server : ${event.data}`);
            };
        
            return () => {
              if (socketInstance) {
                  socketInstance.close();
              }
              
              setSocket(null); // 컴포넌트 unmount 시에는 소켓 인스턴스 제거
          };


          }, [productId]);

          const handleSave = () => {


            
            // 수정된 데이터를 서버에 보내기
            axios.patch(`http://robros-alb-590302301.ap-northeast-2.elb.amazonaws.com/api/v1/recipe`, menuData)
              .then((response) => {
                console.log('데이터 수정 성공:', response);
                // 필요한 처리 작업 수행
              })
              .catch((error) => {
                console.error('데이터 수정 실패:', error);
              });
          };

    return (
      <div>
        <Container1>
        <Input1
  type="text"
  placeholder="메뉴명 입력"
  value={menuName || (menuData && menuData.name)} // Input1의 값은 menuName 상태 또는 menuData.name으로 설정
  onChange={(e) => setMenuName(e.target.value)} // 선택 사항: 입력 변경 처리
/>

        <Select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option value="category1">커피</option>
          <option value="category2">티&라떼</option>
          <option value="category3">에이드</option>
          <option value="category4">스파클링</option>
        </Select>
            <Container2>
            <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>
          아이스
        </Button1>
        <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>
          핫
        </Button2>
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
  {selectedFile ? selectedFile.name : fileName}
  <div style={{ marginTop: '5px', marginLeft: '30px' }}>
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
>           
{menuData &&
  menuData.recipes &&  
  menuData.recipes[0].ingredient.map((ing, index) => (
    <ListContent key={index}>
      <img style={{ margin: "0 0 0 15px" }} src={Drag} />
      <label style={{ marginLeft: "14px", fontFamily: "Pretendard", fontSize: '20px', width: "418px", height: "40px", background: "#FFFFFF", borderRadius: "8px", paddingLeft:'24px', paddingTop:'16px'}}>
        {ing.ingredientName}
      </label>
      {menuData.recipes.map(recipe => {
        const ingredient = recipe.ingredient.find(i => i.seq === ing.seq);
        return (
          <>
<Button11
  key={recipe.cupId}
  zeroQuantity={ingredient && ingredient.quantity === 0}
  onClick={() => setNumberWonModalOpen4(true)}
>
  {ing.ingredientName === '샷' ? (numberWonModalOpen4 ? price4 + '샷' : ingredient.quantity + '샷') : (numberWonModalOpen4 ? price4 + 'ml' : (ingredient ? ingredient.quantity + 'ml' : '0'))}
</Button11>

{numberWonModalOpen4 && (
  <ModalNumber_Won_edit
    closeModal={setNumberWonModalOpen4}
    setValue={value => {
      setPrice4(value.toString()); // Update the price4 with the new value entered in the modal
      setNumberWonModalOpen4(false); // Close the modal
    }}
  />
)}


          </>
        );
      })}
      <ButtonX >
        <img style={{ margin:"10" }} src={Del} /> 
      </ButtonX> 
    </ListContent>
))}


</ContainerList>




      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Button4 onClick={() => setIngredientModalOpen(true)}> 
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img style={{margin: "0px 12px 0px 46px"}} src={Plus} /> 
              <label style={{margin: "0px 0px 0px 0px", fontFamily: "Pretendard", fontSize: '20px', }}> 재료추가 </label>
            </div>
          </Button4>
          {ingredientModalOpen && <ModalIngredient_edit closeModal={setIngredientModalOpen} />}
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
          {numberWonModalOpen1 && <ModalNumber_Won_edit closeModal={setNumberWonModalOpen1} setValue={setPrice1}/>}

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
          {numberWonModalOpen2 && <ModalNumber_Won_edit closeModal={setNumberWonModalOpen2} setValue={setPrice2}/>}

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
          {numberWonModalOpen3 && <ModalNumber_Won_edit closeModal={setNumberWonModalOpen3} setValue={setPrice3}/>}
        </div>
      </div> 

        {/* 웹소켓 테스트버튼 */}
        
        { isButton1Clicked ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>

          {/* 버튼D부분 코드 메뉴수정.js에 옮기기 */}
          <ButtonD onClick={() => setDeleteMenu(true)}>메뉴삭제</ButtonD>
          {ModalDeleteMenuOpen && (
            <ModalDeleteMenu_edit closeModal={() => setDeleteMenu(false)} productId={menuData.productId} />
          )}

          <Button6 style={{marginLeft: "416px"}}> 테스트 </Button6> 
          <Button6 style={{marginLeft: "10px"}}> 테스트 </Button6> 
          <Button6 style={{marginLeft: "10px"}}> 테스트 </Button6> 
          </div>
        ) : null }

        { isButton2Clicked ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <ButtonD onClick={() => setDeleteMenu(true)}>메뉴삭제</ButtonD>
          {ModalDeleteMenuOpen && (
            <ModalDeleteMenu_edit closeModal={() => setDeleteMenu(false)} productId={menuData.productId} />
          )}

          <Button7 style={{marginLeft: "416px"}}> 테스트 </Button7> 
          <Button7 style={{marginLeft: "10px"}}> 테스트 </Button7>
          <Button7 style={{marginLeft: "10px"}}> 테스트 </Button7> 
        </div>   
        ) : null }
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button8 onClick={() => setModalCancelRegisterMenu(true)}> 취소하기 </Button8> 
        {ModalCancelRegisterMenuOpen && <ModalCancelRegisterMenu_edit closeModal={setModalCancelRegisterMenu} />}

        { isButton1Clicked ? (
      <Button9 onClick={handleSave}>저장하기</Button9>
      ) : null }       
        
        { isButton2Clicked ? (
      <Button9 onClick={handleSave}>저장하기</Button9>
      ) : null }

        </div>


        </div>
      );
  }

