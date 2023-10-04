import React, { useState, useEffect } from 'react';// useEffect는 웹소켓 위해
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
    background-color: #71EF5C;
    cursor: pointer;
    border:2px solid #000000;
  }

`;

const Box = styled.div`
   width:170px; 
   height:236px; 
   background-color:#D9D9D9; 
   margin: 0 5px 5px 5px;
   border-radius: 8px;
   transition: 0.5s;
   padding: 20px;
   font-size: 16px;

`;


const Button2 = styled.button`
  background-color: #FDCABE;
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
    background-color: #FFE6E0;
    cursor: pointer;
    border:2px solid #F84D27;
    color: #F84D27;
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
    background-color: #D03310;
    cursor: pointer;
    border:2px solid #000000;
    color: #FFFFFF;
  }
`;


export default function LeftContainer() {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null); // 상태변수로 socket 외부에서도 관리

  useEffect(() => {
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
}, []);

const handleButton1Click = () => {
    const data1 = { "PauseRobot" : 1 }; // 버튼1 클릭시 보내줄 json
    
    if (socket && socket.readyState === WebSocket.OPEN) { 
      socket.send(JSON.stringify(data1));
        setMessage("일시정지 버튼이 클릭되었습니다."); // 버튼1 클릭시 전송할 메시지 업데이트
      }
};

const handleButton2Click = () => {
     const data2= { "Reset" : 1 }; // 버튼2 클릭시 보내줄 json
    
     if (socket && socket.readyState === WebSocket.OPEN) { 
      socket.send(JSON.stringify(data2));
         setMessage("로봇리셋 버튼이 클릭되었습니다."); // 버튼2 클릭시 전송할 메시지 업데이트
        }
 };

 const handleButton3Click= () => {
      const data3= { "EmergencyStop" : 1 }; // 버튼3 클릭시 보내줄 json
     
      if (socket && socket.readyState === WebSocket.OPEN) { 
        socket.send(JSON.stringify(data3));
          console.log('버튼3 클릭 - data3 전송');
          setMessage("긴금정지 버튼이 클릭되었습니다."); // 버튼2 클릭시 전송할 메시지 업데이트
       }
  };


  return (
    <Container>
        <Button1 onClick={handleButton1Click}>일시정지</Button1>
        <Box>{message}</Box> {/* 받은 메시지 표시 */}
        <Button2 onClick={handleButton2Click}>로봇리셋</Button2>
        <Button3 onClick={handleButton3Click}>긴급정지</Button3>
    </Container>
   );
}
