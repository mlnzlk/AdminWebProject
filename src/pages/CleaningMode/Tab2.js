import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ice8 from "../../assets/CIT_CUP/ice8.png";
import ice14 from "../../assets/CIT_CUP/ice14.png";
import ice20 from "../../assets/CIT_CUP/ice20.png";
import hot12 from "../../assets/CIT_CUP/hot12.png";
import hot12_C from "../../assets/CIT_CUP/hot12_C.png";
import hot16 from "../../assets/CIT_CUP/hot16.png";
import hot16_C from "../../assets/CIT_CUP/hot16_C.png";

function GridButton({ onClick, valueObject }) {
  return (
    <Button1
      imageUrl={valueObject.image} // Add this line
      onClick={() => onClick(valueObject)}
    >
      {valueObject.name}
    </Button1>
  );
}

function MyComponent() {
  const buttonValues1 = [
    [
      {
        id: "Ice20_1",
        image: ice20,
        message: "20 온즈 아이스컵 추출중...",
        data: { button: "cup_20Left_on", value: 1 },
      },
      {
        id: "Ice20_2",
        image: ice20,
        message: "20 온즈 아이스컵 추출중...",
        data: { button: "cup_20Right_on", value: 1 },
      },
      {
        id: "Ice14",
        image: ice14,
        message: "14온즈 아이스컵 추출중...",
        data: { button: "cup_14_on", value: 1 },
      },
      {
        id: "Ice8",
        image: ice8,
        message: "8온즈 아이스컵 추출중...",
        data: { button: "cup_8_on", value: 1 },
      },
    ],

    [
      {
        id: "Hot16_C",
        image: hot16_C,
        message: "16온즈 핫컵 컬러 추출중...",
        data: { button: "cup_16Left_on", value: 1 },
      },
      {
        id: "Hot16",
        image: hot16,
        message: "16온즈 핫컵 추출중...",
        data: { button: "cup_16Right_on", value: 1 },
      },
      {
        id: "Hot12_C",
        image: hot12_C,
        message: "12온즈 핫컵 컬러 추출중...",
        data: { button: "cup_10Left_on", value: 1 },
      },
      {
        id: "Hot12",
        image: hot12,
        message: "12온즈 핫컵 추출중...",
        data: { button: "cup_16Right_on", value: 1 },
      },
    ],
  ];

  const [clickedButton, setClickedButton] = useState(null);
  const [clickedButton2, setClickedButton2] = useState(false);
  const [clickedButton3, setClickedButton3] = useState(false);
  const [clickedButton4, setClickedButton4] = useState(false);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null); // 상태변수로 socket 외부에서도 관리

  const handleButtonClick = (valueObject) => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(valueObject.data));
      setMessage(valueObject.message);

      setTimeout(() => {
        socketInstance.close();
        console.log("WebSocket 연결 종료");
      }, 1000); // Adjust the timeout as needed
    };
  };

  const handleICEClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "icecream_1dose", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("아이스크림 추출중..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleOPENClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "icecream_on", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("OPEN..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleCLOSEClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "icecream_off", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("CLOSE..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleMixieGripperOpenClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "mixie_gripper_open", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("Mixie Gripper Open..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleMixieGripperCloseClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "mixie_gripper_close", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("Mixie Gripper Close..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handlePortyGripperOpenClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "porty_gripper_open", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("Porty Gripper Open..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handlePortyGripperCloseClick = () => {
    const socketInstance = new WebSocket("ws://208.205.0.2:7090");
    const data1 = { button: "mixie_gripper_close", value: 1 }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("Porty Gripper Close..."); // 클릭시 전송할 메시지 업데이트

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
            value={valueObject.image}
            valueObject={valueObject}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    ));

  return (
    <Box1>
      <Box2> CUP </Box2>
      <div style={{ display: "flex", marginTop: "6px" }}>
        <div>{createGrid(buttonValues1)}</div>
      </div>
      <Box2 style={{ marginTop: "20px" }}> ICE CREAM </Box2>
      <div>
        <Button2
          style={{ margin: "10px 10px 0 -10px" }}
          clicked={clickedButton2}
          onClick={handleICEClick}
        >
          아이스크림 뽑기
        </Button2>
        <Button3
          style={{ margin: "10px 10px 0 0" }}
          clicked={clickedButton3}
          onClick={handleOPENClick}
        >
          OPEN
        </Button3>
        <Button3
          style={{ margin: "10px 0 0 0" }}
          clicked={clickedButton3}
          onClick={handleCLOSEClick}
        >
          CLOSE
        </Button3>
      </div>
      <Box2 style={{ marginTop: "15px" }}> GRIPPER </Box2>
      <div>
        <Button3
          style={{ margin: "10px 10px 10px 25px" }}
          clicked={clickedButton3}
          onClick={handleMixieGripperOpenClick}
        >
          MIXIE GRIPPER OPEN
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0px" }}
          clicked={clickedButton3}
          onClick={handleMixieGripperCloseClick}
        >
          MIXIE GRIPPER CLOSE
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0px" }}
          clicked={clickedButton3}
          onClick={handlePortyGripperOpenClick}
        >
          PORTY GRIPPER OPEN
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0px" }}
          clicked={clickedButton3}
          onClick={handlePortyGripperCloseClick}
        >
          PORTY GRIPPER CLOSE
        </Button3>
      </div>
    </Box1>
  );
}

export default MyComponent;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1046px;
  height: 730px;
  background: #f0f0f0;
  flex-direction: column;
`;

const Box2 = styled.div`
  width: 990px;
  height: 32px;
  background: linear-gradient(
    90deg,
    #d9d9d9 1.57%,
    rgba(217, 217, 217, 0) 100%
  );
  opacity: 0.8;
  border-radius: 7px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin-top: 28px;
  padding-left: 10px;
`;

const Button1 = styled.button`
  font-size: 28px;
  color: black;
  margin: 0 10px 10px 0;
  width: 240px;
  height: 110px;
  border-radius: 8px;
  transition: 0.5s;
  background-color: #ffffff;
  border: none;
  font-weight: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;

  &:hover {
    cursor: pointer;
    border: 1px solid #f84d27;
  }
`;

const Button2 = styled.button`
  width: 490px;
  height: 100px;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 28px;
  color: black;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: #fff8f6;
    border: 1px solid #f84d27;
  }
`;
const Button3 = styled.button`
  width: 240px;
  height: 100px;
  background-color: #ffffff;
  border: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 24px;
  color: black;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: #fff8f6;
    border: 1px solid #f84d27;
  }
`;
const Button4 = styled.button`
  width: 240px;
  height: 110px;
  background-color: #f3f3f3;
  border: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
