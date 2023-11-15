import { React, useState } from 'react';
import styled from 'styled-components';


const ModalIngredient = ({ closeModal }) => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const socketInstance = new WebSocket('ws://192.168.0.19:12345');
        const data1 = {
          "button": "clean_mode_on",
          "value": 1,
        };
    
        socketInstance.onopen = function (event) {
          console.log('WebSocket 연결 성공');
          socketInstance.send(JSON.stringify(data1));
          setMessage('일시정지 버튼이 클릭되었습니다.');
    
          setTimeout(function() {
            socketInstance.close();
            console.log('WebSocket 연결 닫힘');
          }, 3000); // 5초 후에 웹소켓 연결 닫기
        };
        closeModal(false);
      };

    return (
      <>
        
        <Container1>
          <ModalBlock>

          <Label style={{marginTop: "130px", fontWeight: "600"}}>일시정지 누를 겁니까</Label>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button1 style={{marginTop: "111px"}} onClick={handleClick}>네</Button1>
            <Button2 style={{marginTop: "111px"}} onClick={() => closeModal(false)}> 아뇨 </Button2> 
            </div>

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: white;
    color: black;
    width: 987px;
    height: 400px;  
    z-index:101;

`;


const Label = styled.div`
display: flex;
justify-content: center;    
align-items: center;
font-family: 'Pretendard';
font-style: normal;
font-size: 32px;
line-height: 38px;
color: #000000;
`;



  const Button1 = styled.button`
  font-family: 'Pretendard';
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;  
  background: #000000;
  width: 493px;
  height: 120px;
  border: none;
  border-radius: 0 0 0 20px;
   &:hover {
    cursor:pointer; 
   }
  `;

  const Button2 = styled.button`
  font-family: 'Pretendard';
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;  
  background: #808080;
  width: 494px;
  height: 120px;
  border-radius: 0 0 20px 0;

  border: none;
   &:hover {
    cursor:pointer; 
   }
  `;
export default ModalIngredient