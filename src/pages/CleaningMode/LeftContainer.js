import React, { useState, useEffect } from "react"; // useEffect는 웹소켓 위해
import styled from "styled-components";

export default function LeftContainer() {
  const [message, setMessage] = useState("");

  const handleButton1Click = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = {
      button: "clean_mode_on",
      value: 1,
    };

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("일시정지 버튼이 클릭되었습니다.");

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 5초 후에 웹소켓 연결 닫기
    };
  };

  const handleButton2Click = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data2 = {
      // 배포 테스트용 임시 데이터
      button: "clean_mode_off",
      value: 1,
    };
    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data2));
      setMessage("로봇리셋 버튼이 클릭되었습니다.");

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleButton3Click = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data3 = { EmergencyStop: 1 };

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data3));
      setMessage("긴금정지 버튼이 클릭되었습니다.");

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  return (
    <Container>
      <Button1 onClick={handleButton1Click}>clean_on</Button1>
      <Box>{message}</Box> {/* 받은 메시지 표시 */}
      <Button2 onClick={handleButton2Click}>clean_off</Button2>
      <Button3 onClick={handleButton3Click}>긴급정지</Button3>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const Button1 = styled.button`
  background-color: #5cae4e;
  font-size: 32px;
  font-weight: bold;
  color: black;
  padding: 10px;
  border: none;
  margin: 0 5px 5px 5px;
  border-radius: 8px;
  width: 200px;
  height: 185px;
  transition: 0.5s;

  &:hover {
    background-color: #71ef5c;
    cursor: pointer;
    border: 2px solid #000000;
  }
`;

const Box = styled.div`
  width: 160px;
  height: 236px;
  background-color: #d9d9d9;
  margin: 0 5px 5px 5px;
  border-radius: 8px;
  transition: 0.5s;
  padding: 20px;
  font-size: 16px;
`;

const Button2 = styled.button`
  background-color: #fdcabe;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 204px;
  margin: 0 5px 5px 5px;
  font-size: 36px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    background-color: #ffe6e0;
    cursor: pointer;
    border: 2px solid #f84d27;
    color: #f84d27;
  }
`;

const Button3 = styled.button`
  background-color: #f84d27;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin: 0 5px 5px 5px;
  width: 200px;
  height: 202px;
  transition: 0.5s;
  font-weight: bold;
  font-size: 36px;

  &:hover {
    background-color: #d03310;
    cursor: pointer;
    border: 2px solid #000000;
    color: #ffffff;
  }
`;
