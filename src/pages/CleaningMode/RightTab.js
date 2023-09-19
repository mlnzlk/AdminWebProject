import { useState } from 'react';
import styled from 'styled-components';


const TabMenu = styled.ul`
  background-color: #45474E;
  color: #585E72;
  display: flex;
  flex-direction: row;
  width:1046px; 
  height:71px; 

  .submenu {
    display: flex;
    width: 523px;
    heigth: 71px;
    padding: 10px;
    font-size: 24px;
    transition: 0.5s;

  }

  .focused {
    background-color: #4E63AE;
    color: white;
    text-align: center;
    width: 523px;
    heigth: 71px; 

  }

`;

const Desc = styled.div`
width: 1046px;
height: 811px;
background-color: ;444444;
`;

export default function RightTab() {
    // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
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

          {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};