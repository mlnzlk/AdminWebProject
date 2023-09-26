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
background-color: #FDCABE;
font-size: 28px;
color: black;
border: none;
margin: 32px;
border-radius: 8px;
width: 452px;
height: 108px;
transition: 0.5s;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
font-weight: normal;

&:hover {
cursor: pointer;
font-weight: bold;
background-color:#FFF8F6;
border:1px solid #F84D27;
}
`;

function GridButton({ onClick, value, clicked }) {
    return <Button1 clicked={clicked} onClick={onClick}>{value.name}</Button1>;
  }

function MyComponent() {
const buttonValues1 = [
[{ id:'Mint', name:'민트' },{ id:'Blacktea', name:'홍차' }],
[{ id:'Vanilla', name:'바닐라' },{ id:'Melon', name:'메론' }],
[{ id:'Strawberry', name:'딸기' },{ id:'Classic', name:'클래식' }],
[{ id:'Greentea', name:'녹차' },{ id:'Blue', name:'블루' }],
[{ id:'Lemon', name:'레몬' },{ id:'Sparkleft', name:'탄산수 좌' }]
];

const buttonValues2 = [
    [{ id:'Coldbrew', name:'콜드브루' },{ id:'Decaf', name:'디카페인' }],
    [{ id:'Condensedmilk', name:'연유' },{ id:'none', name:'ㅤ' }],
    [{ id:'Choco', name:'초코' },{ id:'none1', name:'ㅤ' }],
    [{ id:'none2', name:'ㅤ' },{ id:'none3', name:'ㅤ' }],
    [{ id:'none4', name:'ㅤ' },{ id:'Sparkright', name:'탄산수 우' }]
];

const [clickedButton, setClickedButton] = useState(null);

 const createGrid = (buttonValues) =>
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
<Box>
<div style={{display:"flex", marginTop:"38px"}}>
<div style={{marginLeft:"8px", marginRight:"20px"}}>{createGrid(buttonValues1)}</div>
<div>{createGrid(buttonValues2)}</div>
</div>
<Button2>온수</Button2>
</Box>
);
}

export default MyComponent;