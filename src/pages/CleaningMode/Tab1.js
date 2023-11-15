import React, { useState, useEffect } from "react";
import styled from "styled-components";

function GridButton({ onClick, valueObject }) {
  return (
    <Button1 imageUrl={valueObject.image} onClick={() => onClick(valueObject)}>
      {valueObject.name}
    </Button1>
  );
}

function MyComponent() {
  const buttonValues1 = [
    [
      {
        id: "syrup1",
        name: "콜드브루",
        message: "콜드브루 시럽 추출중...",
        data: { button: "syrup1", value: 1 },
      },
      {
        id: "syrup6",
        name: "초코",
        message: "초코 시럽 추출중...",
        data: { button: "syrup6", value: 1 },
      },
    ],
    [
      {
        id: "syrup2",
        name: "디카페인",
        message: "디카페인 시럽 추출중...",
        data: { button: "syrup2", value: 1 },
      },
      {
        id: "syrup7",
        name: "ㅤ",
        message: " 시럽 추출중...",
        data: { button: "syrup7", value: 1 },
      },
    ],
    [
      {
        id: "syrup3",
        name: "민트",
        message: "민트 시럽 추출중...",
        data: { button: "syrup3", value: 1 },
      },
      {
        id: "syrup8",
        name: "ㅤ",
        message: " 시럽 추출중...",
        data: { button: "syrup8", value: 1 },
      },
    ],
    [
      {
        id: "syrup4",
        name: "ㅤ",
        message: " 시럽 추출중...",
        data: { button: "syrup4", value: 1 },
      },
      {
        id: "syrup9",
        name: "ㅤ",
        message: " 시럽 추출중...",
        data: { button: "syrup9", value: 1 },
      },
    ],
    [
      {
        id: "syrup5",
        name: "연유",
        message: "연유 시럽 추출중...",
        data: { button: "syrup5", value: 1 },
      },
      {
        id: "soda_left_on",
        name: "탄산수 좌",
        message: "탄산수 좌측 추출중...",
        data: { button: "soda_left_on", value: 1 },
      },
    ],
  ];

  const buttonValues2 = [
    [
      {
        id: "syrup10",
        name: "클래식",
        message: "클래식 시럽 추출중...",
        data: { button: "syrup10", value: 1 },
      },
      {
        id: "syrup15",
        name: "레몬",
        message: "레몬 시럽 추출중...",
        data: { button: "syrup15", value: 1 },
      },
    ],
    [
      {
        id: "syrup11",
        name: "녹차",
        message: "녹차 시럽 추출중...",
        data: { button: "syrup11", value: 1 },
      },
      {
        id: "syrup16",
        name: "딸기",
        message: "딸기 시럽 추출중...",
        data: { button: "syrup16", value: 1 },
      },
    ],
    [
      {
        id: "syrup12",
        name: "블루",
        message: "블루 시럽 추출중...",
        data: { button: "syrup12", value: 1 },
      },
      {
        id: "syrup17",
        name: "홍차",
        message: "홍차 시럽 추출중...",
        data: { button: "syrup17", value: 1 },
      },
    ],
    [
      {
        id: "syrup13",
        name: "바닐라",
        message: "바닐라 시럽 추출중...",
        data: { button: "syrup13", value: 1 },
      },
      {
        id: "syrup18",
        name: "빈",
        message: "빈 시럽 추출중...",
        data: { button: "syrup18", value: 1 },
      },
    ],
    [
      {
        id: "syrup14",
        name: "메론",
        message: "메론 시럽 추출중...",
        data: { button: "syrup14", value: 1 },
      },
      {
        id: "soda_right_on",
        name: "탄산수 우",
        message: "탄산수 우측 추출중...",
        data: { button: "soda_right_on", value: 1 },
      },
    ],
  ];

  const [clickedButton, setClickedButton] = useState(null);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState(0);

  const handleButtonClick = (valueObject) => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");

      const dataToSend = { ...valueObject.data };
      if (inputValue) {
        for (let key in dataToSend) {
          if (key === "value") {
            dataToSend[key] = parseInt(inputValue);
          }
        }
      }

      socketInstance.send(JSON.stringify(dataToSend));

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleHotWaterClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = {
      button: "hot_water_on",
      value: 1,
    }; // 클릭시 보내줄 json
    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("온수 추출중..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handlePauseSyrupClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = {
      button: "syrup_stop",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("시럽 멈추기 버튼이 클릭되었습니다."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const createGrid = (buttonValues) =>
    buttonValues.map((rowValueArray, rowIndex) => (
      <div key={rowIndex}>
        {rowValueArray.map((valueObject, colIndex) => (
          <GridButton
            key={colIndex}
            valueObject={valueObject}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    ));

  return (
    <Box>
      <div style={{ display: "flex", marginTop: "28px" }}>
        <div style={{ marginLeft: "8px", marginRight: "20px" }}>
          {createGrid(buttonValues1)}
        </div>
        <div>{createGrid(buttonValues2)}</div>
      </div>

      <div style={{ marginTop: "-20px", height: "150px" }}>
        <Button2 onClick={handleHotWaterClick}>온수</Button2>
        <Label1> 추출시간 </Label1>
        <Input
          type="number"
          min="1"
          max="15"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value < 1 || value > 15) {
              alert("1~15 사이의 정수만 입력해 주세요..! ( •̀ω•́ )و✧");
              e.target.value = "";
              return;
            }
            setInputValue(value);
          }}
        />
        <Label2> 초 </Label2>
        <Button3 onClick={handlePauseSyrupClick}>시럽 멈추기</Button3>
      </div>
    </Box>
  );
}

export default MyComponent;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1046px;
  height: 730px;
  background: #f0f0f0;
  flex-direction: column;
`;

const Button1 = styled.button`
  font-size: 28px;
  color: black;
  margin: 0 12px 12px 0;
  width: 220px;
  height: 100px;
  border-radius: 8px;
  transition: 0.5s;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: #fff8f6;
    border: 1px solid #f84d27;
  }
`;

const Button2 = styled.button`
  background-color: #ffffff;
  font-size: 28px;
  color: black;
  border: none;
  margin: 26px 0 0 24px;
  border-radius: 8px;
  width: 226px;
  height: 108px;
  transition: 0.5s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  font-weight: normal;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: #808080;
    border: 1px solid #000000;
  }
`;

const Button3 = styled.button`
  background-color: #fdcabe;
  font-size: 28px;
  color: black;
  border: none;
  margin-left: 20px;
  border-radius: 8px;
  width: 220px;
  height: 100px;
  transition: 0.5s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  font-weight: normal;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: #fba693;
    border: 2px solid #000000;
  }
`;

const Label1 = styled.label`
  font-size: 28px;
  margin-left: 190px;
  font-weight: bold;
`;

const Label2 = styled.label`
  font-size: 28px;
  margin-left: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 26px;
  background-color: white;
  width: 73px;
  height: 53px;
  padding-left: 15px;
  border-radius: 12px;
  margin-left: 5px;

  border: none;
`;
