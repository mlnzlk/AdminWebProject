import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ice8 from "../../assets/CIT_CUP/ice8.png";
import ice14 from "../../assets/CIT_CUP/ice14.png";
import ice20 from "../../assets/CIT_CUP/ice20.png";
import hot12 from "../../assets/CIT_CUP/hot12.png";
import hot12_C from "../../assets/CIT_CUP/hot12_C.png";
import hot16 from "../../assets/CIT_CUP/hot16.png";
import hot16_C from "../../assets/CIT_CUP/hot16_C.png";

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
  height: 110px;
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
  width: 200px;
  height: 110px;
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
const Button4 = styled.button`
  width: 200px;
  height: 100px;
  background-color: #f3f3f3;
  border: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
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
        data: { Ice20: 1 },
      },
      {
        id: "Ice20_2",
        image: ice20,
        message: "20 온즈 아이스컵 추출중...",
        data: { Ice20: 1 },
      },
      {
        id: "Ice14",
        image: ice14,
        message: "14온즈 아이스컵 추출중...",
        data: { Ice14: 1 },
      },
      {
        id: "Ice8",
        image: ice8,
        message: "8온즈 아이스컵 추출중...",
        data: { Ice8: 1 },
      },
    ],

    [
      {
        id: "Hot16_C",
        image: hot16_C,
        message: "16온즈 핫컵 컬러 추출중...",
        data: { Hot16_C: 1 },
      },
      {
        id: "Hot16",
        image: hot16,
        message: "16온즈 핫컵 추출중...",
        data: { Hot16: 1 },
      },
      {
        id: "Hot12_C",
        image: hot12_C,
        message: "12온즈 핫컵 컬러 추출중...",
        data: { Hot12_C: 1 },
      },
      {
        id: "Hot12",
        image: hot12,
        message: "12온즈 핫컵 추출중...",
        data: { Hot12: 1 },
      },
    ],
  ];

  const [clickedButton, setClickedButton] = useState(null);
  const [clickedButton2, setClickedButton2] = useState(false);
  const [clickedButton3, setClickedButton3] = useState(false);
  const [clickedButton4, setClickedButton4] = useState(false);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null); // 상태변수로 socket 외부에서도 관리

  const handleOREOClick = () => {
    const socketInstance = new WebSocket("ws://208.205.1.13:7090");
    const data1 = {
      button: "topping1_on",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("오레오 추출중..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleROTUSClick = () => {
    const socketInstance = new WebSocket("ws://208.205.1.13:7090");
    const data1 = {
      button: "topping2_on",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("로투스 추출중..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleToOrigin = () => {
    const socketInstance = new WebSocket("ws://208.205.1.13:7090");
    const data1 = {
      button: "drizzle1_back",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("원점으로..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleKeepPicking = () => {
    const socketInstance = new WebSocket("ws://208.205.1.13:7090");
    const data1 = {
      button: "drizzle1_continue",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("계속뽑기..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleFstDraw = () => {
    const socketInstance = new WebSocket("ws://208.205.1.13:7090");
    const data1 = {
      button: "drizzle1_front",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("1회 뽑기..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  const handleDrizzleStop = () => {
    const socketInstance = new WebSocket("ws://208.205.1.13:7090");
    const data1 = {
      button: "drizzle1_stop",
      value: 1,
    }; // 클릭시 보내줄 json

    socketInstance.onopen = function (event) {
      console.log("WebSocket 연결 성공");
      socketInstance.send(JSON.stringify(data1));
      setMessage("멈추기..."); // 클릭시 전송할 메시지 업데이트

      setTimeout(function () {
        socketInstance.close();
        console.log("WebSocket 연결 닫힘");
      }, 3000); // 3초 후에 웹소켓 연결 닫기
    };
  };

  return (
    <Box1>
      <Box2 style={{ marginTop: "16px" }}> TOPPING </Box2>
      <div>
        <Button3
          style={{ margin: "0px 10px 10px 0px" }}
          clicked={clickedButton3}
          onClick={handleOREOClick}
        >
          오레오
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton4}
          onClick={handleROTUSClick}
        >
          로투스
        </Button3>
        <Button4 style={{ margin: "0px 10px 0px 0" }} clicked={clickedButton4}>
          ㅤ
        </Button4>
        <Button4 style={{ margin: "0px 10px 0px 0" }} clicked={clickedButton4}>
          ㅤ
        </Button4>
      </div>
      <div>
        <Button4 style={{ margin: "0px 10px 10px 0" }} clicked={clickedButton4}>
          ㅤ
        </Button4>
        <Button4 style={{ margin: "0px 10px 10px 0" }} clicked={clickedButton4}>
          ㅤ
        </Button4>
        <Button4 style={{ margin: "0px 10px 10px 0" }} clicked={clickedButton4}>
          ㅤ
        </Button4>
        <Button4 style={{ margin: "0px 10px 10px 0" }} clicked={clickedButton4}>
          ㅤ
        </Button4>
      </div>
      <Box2 style={{ marginTop: "10px", marginBottom: "6px" }}> DRIZZLE </Box2>
      <div>
        <Button3
          style={{ margin: "10px 10px 10px 0px" }}
          clicked={clickedButton3}
          onClick={handleToOrigin}
        >
          원점으로
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton3}
          onClick={handleKeepPicking}
        >
          계속 뽑기
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton3}
          onClick={handleFstDraw}
        >
          1회 뽑기
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton3}
          onClick={handleDrizzleStop}
        >
          멈추기
        </Button3>
      </div>
      <div>
        <Button3
          style={{ margin: "10px 10px 10px 0px" }}
          clicked={clickedButton3}
          onClick={handleToOrigin}
        >
          원점으로
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton3}
          onClick={handleKeepPicking}
        >
          계속 뽑기
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton3}
          onClick={handleFstDraw}
        >
          1회 뽑기
        </Button3>
        <Button3
          style={{ margin: "10px 10px 10px 0" }}
          clicked={clickedButton3}
          onClick={handleDrizzleStop}
        >
          멈추기
        </Button3>
      </div>
    </Box1>
  );
}

export default MyComponent;
