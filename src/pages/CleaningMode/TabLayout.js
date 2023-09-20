import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import FaucetTab from "./Faucet_Tab";



export const TabMenu = styled.div`
  background-color: #FDFDFD;
  display: flex;
  list-style: none;
  cursor: pointer;
  margin-right: 11.5rem;
  top: 1rem;
  width:1046px; 
  height:65px; 

.submenu {
    display:flex ;
    justify-content:center ;
    align-items:center ;
    width :50% ; ;
    height:auto ; 
    font-size :24px ;
    font-weight: bold;
    color: #D9D9D9;
    border-radius: 10px 10px 0px 0px;

    padding-left :0.32rem ;
    padding-right :0.32rem ;
    transition :0.5s ;

&::first-child {
      border-right :0.02rem solid black ;
      width :1.1rem ;
   }

&::last-child {
     width :2rem ;
   }
 }

.focused {
   background-color:#D9D9D9 ;
   color:black;
   font-size: 24px ;  
   font-weight: bold;
   text-align:center ; 
   width :50% ;  
}
`;

const Desc = styled.div`
width: 1046px;
height: 811px;
background-color: #444444;
`;

const Box = styled.div`
background-color: #3D3D3D;
width: 1046px;
height: 4px;
`;

const menuArr = styled.div`
background-color: #F0F0F0;

`;

export const TabLayout = () => {
    const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '수전', content: <FaucetTab/> },
    { name: 'CUP / ICE CREAM / TOPPING', content: 'Tab menu TWO' },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
        {menuArr.map((tap, index) => {
              return (
                <div
                  key={index}
                  className={currentTab === index ? 'submenu focused'
                             : 'submenu'}
                  onClick={() => selectMenuHandler(index)}
                >
                  {tap.name}
                </div>
              );
            })}
        </TabMenu>
        <Box></Box>

        <div>
            <div>{menuArr[currentTab].content}</div>
          </div>

      </div>
    </>
  );
};