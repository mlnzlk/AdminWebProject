import React, { useState } from 'react';
import styled from "styled-components";

import ice8 from '../../assets/CIT_CUP/ice8.png';
import ice14 from '../../assets/CIT_CUP/ice14.png';
import ice20 from '../../assets/CIT_CUP/ice20.png';
import hot12 from '../../assets/CIT_CUP/hot12.png';
import hot12_C from '../../assets/CIT_CUP/hot12_C.png';
import hot16 from '../../assets/CIT_CUP/hot16.png';
import hot16_C from '../../assets/CIT_CUP/hot16_C.png';


const Box1 = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width:1046px;
  height:811px;
  background:#F0F0F0;
  flex-direction: column;
`;

const Box2 = styled.div`
width: 990px;
height: 32px;
background: linear-gradient(90deg, #D9D9D9 1.57%, rgba(217, 217, 217, 0) 100%);
opacity: 0.8;
border-radius: 7px;
color : white;
font-size : 22px;
font-weight : bold;
margin-top: 28px;
padding-left: 10px ;
`;

const Button1 = styled.button`
  font-size: 28px;
  color: black;
  margin: 0 10px 10px 0;
  width: 240px;
  height: 112px;
  border-radius: 8px;
  transition: 0.5s;
  background-color: #FFFFFF;
  border: none;
  font-weight:normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  background-image: url(${props => props.imageUrl});
  background-size: cover;

  &:hover {
    cursor: pointer;
    border:1px solid #F84D27;
  }

`;

const Button2 = styled.button`
width: 490px;
height: 112px;
background-color: #FFFFFF;
border:none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
font-size: 28px;
color: black;
transition: 0.5s;

&:hover {
  cursor: pointer;
  font-weight: bold;
  background-color:#FFF8F6;
  border:1px solid #F84D27;
}
`;
const Button3 = styled.button`
width: 240px;
height: 112px;
background-color:#FFFFFF;
border:none;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
font-size: 28px;
color: black;
transition: 0.5s;

&:hover {
  cursor: pointer;
  font-weight: bold;
  background-color:#FFF8F6;
  border:1px solid #F84D27;
}
`;
const Button4 = styled.button`
width: 240px;
height: 112px;
background-color:#F3F3F3;
border:none;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
`;
function GridButton({ onClick, value, clicked }) {
  return (
    <Button1
        clicked={clicked}
        onClick={onClick}
        imageUrl={value} // value는 이미지 경로
    />
);
}

function MyComponent() {
  const buttonValues1 = [
    [{ id: 'ice20_1', image: ice20 }, { id: 'ice20_2', image: ice20 }, { id: 'ice14', image: ice14 }, { id: 'ice8', image: ice8 }],
    [{ id: 'hot16_C', image: hot16_C }, { id: 'hot16', image: hot16 }, { id:'hot12_C',image : hot12_C },{id:'hot12' ,image : hot12 }]
  ];
    
    const [clickedButton, setClickedButton] = useState(null);
        const [clickedButton2, setClickedButton2] = useState(false);
    const [clickedButton3, setClickedButton3] = useState(false);
    const [clickedButton4, setClickedButton4] = useState(false);

const createGrid = (buttonValues) =>
    buttonValues.map((rowValueArray, rowIndex) => 
        <div key={rowIndex}>
            {rowValueArray.map((valueObject, colIndex) => 
                <GridButton
                    key={colIndex}
                    value={valueObject.image}
                    onClick={() => setClickedButton(valueObject)}
                    clicked={clickedButton === valueObject}
                />
            )}
        </div>
    );


      
 return (
   <Box1>
     <Box2> CUP </Box2>
     <div style={{display:"flex", marginTop:"6px"}}>
     <div>{createGrid(buttonValues1)}</div>
     </div>
     <Box2 style={{marginTop:"20px"}}> ICE CREAM </Box2>
     <div>
          <Button2 style={{margin:"10px 10px 0 -10px"}} clicked={clickedButton2} onClick={() => setClickedButton2(!clickedButton2)}>아이스크림 뽑기</Button2>
          <Button3 style={{margin:"-10px 10px 0 0"}} clicked={clickedButton3} onClick={() => setClickedButton3(!clickedButton3)}>OPEN</Button3>
          <Button3 style={{margin:"-10px 0 0 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>CLOSE</Button3>
     </div>
     <Box2 style={{marginTop:"26px"}}> TOPPING </Box2>
     <div>
          <Button3 style={{margin:"10px 10px 10px -10px"}} clicked={clickedButton3} onClick={() => setClickedButton3(!clickedButton3)}>오레오</Button3>
          <Button3 style={{margin:"10px 10px 10px 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>로투스</Button3>
          <Button4 style={{margin:"-10px 10px 10px 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>ㅤ</Button4>
          <Button4 style={{margin:"-10px 0 10px 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>ㅤ</Button4>
    </div>
    <div>
          <Button4 style={{margin:"-10px 10px 10px 0px"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>ㅤ</Button4>
          <Button4 style={{margin:"-10px 10px 10px 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>ㅤ</Button4>
          <Button4 style={{margin:"-10px 10px 10px 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>ㅤ</Button4>
          <Button4 style={{margin:"-10px 10px 10px 0"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>ㅤ</Button4>
    </div>
   </Box1>
   



 );
}

export default MyComponent;