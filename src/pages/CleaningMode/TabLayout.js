import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';



export const TabMenu = styled.div`
  background-color: #45474E;
  color: #585E72;
  display: flex;
  list-style: none;
  cursor: pointer;
  margin-right: 11.5rem;
  top: 1rem;
  width:1046px; 
  height:71px; 

.submenu {
    display:flex ;
    justify-content:center ;
    align-items:center ;
    width :50% ; ;
    height:auto ; 
    font-size :24px ;
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
   background-color:#4E63AE ;
   color:white ;  
   text-align:center ; 
   width :50% ;  
}
`;



const Desc = styled.div`
width: 1046px;
height: 811px;
background-color: ;444444;
`;

export const TabLayout = () => {
    const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '수전 1,2,3', content: 'Tab menu ONE' },
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
        <div>
            <div>{menuArr[currentTab].content}</div>
          </div>
      </div>
    </>
  );
};