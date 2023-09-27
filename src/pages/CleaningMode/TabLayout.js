import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";



export const TabMenu = styled.div`
  background-color: #FDFDFD;
  display: flex;
  list-style: none;
  cursor: pointer;
  margin-right: 11.5rem;
  top: 1rem;
  height:65px; 

.submenu {
    display:flex ;
    justify-content:center ;
    align-items:center ;
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
   }

&::last-child {
   }
 }

.focused {
   background-color:#D9D9D9 ;
   color:black;
   font-size: 24px ;  
   font-weight: bold;
   text-align:center ; 
}
`;

const Desc = styled.div`
width: 1046px;
height: 811px;
background-color: #444444;
`;

const Box = styled.div`
background-color: #3D3D3D;
opacity:0.5;
width: 1046px;
height: 4px;
`;


export const TabLayout = () => {
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
      { name: '수전', content: <Tab1/>, width: '230px' },
      { name: 'CUP / ICE CREAM / TOPPING', content: <Tab2/>, width: '463px' },
      { name: 'TOPPING / DRIZZLE', content: <Tab3/>, width: '347px' },
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
                  style={{width: tap.width}}
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