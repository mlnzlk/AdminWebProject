import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Box = styled.div`;
display: flex;   
justify-content:center;   
align-items:center;   
width:1046px;   
height:811px;   
background:#F0F0F0;   
flex-direction: column;
`;

const Button1 = styled.button`
font-size: 28px;
color: black;
margin: 0 12px 12px 0;
width: 220px;
height: 108px;
border-radius: 8px;
transition: 0.5s;
background-color:#FFFFFF;
border:none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

&:hover {
cursor: pointer;
font-weight: bold;
background-color:#FFF8F6;
border:1px solid #F84D27;
}
`;

const Button2 = styled.button`
background-color: #FFFFFF;
font-size: 28px;
color: black;
border: none;
margin: 36px 0 0 24px;
border-radius: 8px;
width: 226px;
height: 108px;
transition: 0.5s;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
font-weight: normal;

&:hover {
cursor: pointer;
font-weight: bold;
background-color:#808080;
border:1px solid #000000;
}
`;

const Button3 = styled.button`
background-color: #FDCABE;
font-size: 28px;
color: black;
border: none;
margin: 32px;
border-radius: 8px;
width: 220px;
height: 108px;
transition: 0.5s;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
font-weight: normal;

&:hover {
cursor: pointer;
font-weight: bold;
background-color:#FBA693;
border:2px solid #000000;
}
`;

const Label1 = styled.label`
font-size:28px; 
margin-left: 180px;
font-weight: bold;
`;

const Label2 = styled.label`
font-size:28px; 
margin-left: 10px;
font-weight: bold;
`;

const Input = styled.input`
  font-size: 26px;
  background-color: white; 
  width: 73px;
  height: 53px;
  padding-left :15px; 
  border-radius: 12px;
  margin-left: 5px;

  border: none

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
[{ id:'Mint', name:'민트', message: "민트 시럽 추출중...", data: { "Mint": 1 }},
{ id:'Blacktea', name:'홍차', message: "홍차 시럽 추출중...", data: { "Blacktea": 1 } }],
[{ id:'Vanilla', name:'바닐라', message: "바닐라 시럽 추출중...", data: { "Vanilla": 1 } },
{ id:'Melon', name:'메론', message: "메론 시럽 추출중...", data: { "Melon": 1 } }],
[{ id:'Strawberry', name:'딸기', message: "딸기 시럽 추출중...", data: { "Strawberry": 1 } },
{ id:'Classic', name:'클래식', message: "클래식 시럽 추출중...", data: { "Classic": 1 } }],
[{ id:'Greentea', name:'녹차', message: "녹차 시럽 추출중...", data: { "Greentea": 1 } },
{ id:'Blue', name:'블루', message: "블루 시럽 추출중...", data: { "Blue": 1 } }],
[{ id:'Lemon', name:'레몬', message: "레몬 시럽 추출중...", data: { "Lemon": 1 } },
{ id:'Sparkleft', name:'탄산수 좌', message: "탄산수 좌측 추출중...", data: { "Sparkleft": 1 } }]
];

const buttonValues2 = [
    [{ id:'Coldbrew', name:'콜드브루', message: "콜드브루 추출중...", data: { "Coldbrew": 1 } },
    { id:'Decaf', name:'디카페인', message: "디카페인 추출중...", data: { "Decaf": 1 } }],
    [{ id:'Condensedmilk', name:'연유', message: "연유 추출중...", data: { "Condensedmilk": 1 } },
    { id:'none', name:'ㅤ' }],
    [{ id:'Choco', name:'초코', message: "초코 시럽 추출중...", data: { "Choco": 1 } },
    { id:'none1', name:'ㅤ' }],
    [{ id:'none2', name:'ㅤ' },
    { id:'none3', name:'ㅤ' }],
    [{ id:'none4', name:'ㅤ' },
    { id:'Sparkright', name:'탄산수 우', message: "탄산수 우측 추출중...", data: { "Sparkright": 1 }}]
];

const [clickedButton, setClickedButton] = useState(null);
const [socket, setSocket] = useState(null);
const [message, setMessage] = useState('');
const [inputValue, setInputValue] = useState(0);

useEffect(() => {
    const socketInstance = new WebSocket('ws://208.205.1.13:7090');

    socketInstance.onopen = function (event) {
        console.log('WebSocket 연결 성공');
        setSocket(socketInstance);
    };

    socketInstance.onmessage = function (event) {
        console.log(`Received message from server : ${event.data}`);
    };

    return () => {
        if (socketInstance) {
            socketInstance.close();
        }
        
        setSocket(null);
    };
}, []);

const handleButtonClick = (valueObject) => {
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    
    const dataToSend = { ...valueObject.data }; 
    for (let key in dataToSend) { 
        dataToSend[key] = parseInt(inputValue);
    }
    
    socket.send(JSON.stringify(dataToSend));
};


const handleHotWaterClick = () => {
    const data1 = { "HotWater" : 1 }; // 클릭시 보내줄 json
    
    if (socket && socket.readyState === WebSocket.OPEN) { 
      socket.send(JSON.stringify(data1));
        setMessage("온수 추출중..."); // 클릭시 전송할 메시지 업데이트
      }
  };

  const handlePauseSyrupClick = () => {
    const data1 = { "PauseSyrup" : 1 }; // 클릭시 보내줄 json
    
    if (socket && socket.readyState === WebSocket.OPEN) { 
      socket.send(JSON.stringify(data1));
        setMessage("시럽 멈추기 버튼이 클릭되었습니다."); // 클릭시 전송할 메시지 업데이트
      }
  };

const createGrid = (buttonValues) =>
  buttonValues.map((rowValueArray, rowIndex) =>
    <div key={rowIndex}>
      {rowValueArray.map((valueObject, colIndex) =>
        <GridButton
          key={colIndex}
          valueObject={valueObject}
          onClick={handleButtonClick} 
        />
      )}
    </div>
  );


  
return (
<Box>
<div style={{display:"flex", marginTop:"38px"}}>
<div style={{marginLeft:"8px", marginRight:"20px"}}>{createGrid(buttonValues1)}</div>
<div>{createGrid(buttonValues2)}</div>
</div>

<div >
<Button2 onClick={handleHotWaterClick} >온수</Button2>
<Label1> 추출시간 </Label1>
<Input type="number" min="1" max="15"
    onChange={e => {
        const value = parseInt(e.target.value);
        if (value < 1 || value > 15) {
            alert("1~15 사이의 정수만 입력해 주세요..! ( •̀ω•́ )و✧");
            e.target.value = '';
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