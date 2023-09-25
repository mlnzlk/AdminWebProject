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
    [require('../../assets/CIT_CUP/ice20.png'), require('../../assets/CIT_CUP/ice20.png'), require('../../assets/CIT_CUP/ice14.png'), require('../../assets/CIT_CUP/ice8.png')],
    [require('../../assets/CIT_CUP/hot16_C.png'), require('../../assets/CIT_CUP/hot16.png'), require('../../assets/CIT_CUP/hot12_C.png'), require('../../assets/CIT_CUP/hot12.png')]
  ];
    

    const [clickedButton, setClickedButton] = useState(null);
        const [clickedButton2, setClickedButton2] = useState(false);
    const [clickedButton3, setClickedButton3] = useState(false);
    const [clickedButton4, setClickedButton4] = useState(false);

     const createGrid = (buttonValues, ) =>
      buttonValues.map((rowValues, rowIndex) =>
                   <div key={rowIndex}>
             {rowValues.map((value, colIndex) =>
                 <GridButton
                     key={colIndex}
                     value={value}
                     onClick={() => setClickedButton(value)}
                     clicked={clickedButton === value}
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
     <Box2 style={{marginTop:"26px"}}> ICE CREAM </Box2>
     <div>
          <Button2 style={{marginTop:"10px"}} clicked={clickedButton2} onClick={() => setClickedButton2(!clickedButton2)}>아이스크림 뽑기</Button2>
            <Button3 style={{margin:"10px"}} clicked={clickedButton3} onClick={() => setClickedButton3(!clickedButton3)}>OPEN</Button3>
            <Button4 style={{margin:"10px"}} clicked={clickedButton4} onClick={() => setClickedButton4(!clickedButton4)}>OPEN</Button4>
     </div>
     <Box2 style={{marginTop:"26px"}}> TOPPING </Box2>
   </Box1>
 );
}

export default MyComponent;
