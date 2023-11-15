import { useState } from "react";
import styled from "styled-components";
import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

export const TabMenu = styled.div`
  background-color: #fdfdfd;
  display: flex;
  list-style: none;
  cursor: pointer;
  margin-right: 11.5rem;
  top: 1rem;
  height: 65px;

  .submenu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    font-size: 24px;
    font-weight: bold;
    color: #d9d9d9;
    border-radius: 10px 10px 0px 0px;

    padding-left: 0.32rem;
    padding-right: 0.32rem;
    transition: 0.5s;

    &::first-child {
      border-right: 0.02rem solid black;
    }

    &::last-child {
    }
  }

  .focused {
    background-color: #d9d9d9;
    color: black;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;

const Desc = styled.div`
  width: 1046px;
  height: 811px;
  background-color: #444444;
`;

const Box = styled.div`
  background-color: #3d3d3d;
  opacity: 0.5;
  width: 1046px;
  height: 4px;
`;

export const TabLayout = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "수전", content: <Tab1 />, width: "225px" },
    { name: "CUP / ICE CREAM / GRIPPER", content: <Tab2 />, width: "458.5px" },
    { name: "TOPPING / DRIZZLE", content: <Tab3 />, width: "332px" },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.

    clickTab(index);
  };

  return (
    <>
      <div style={{ width: "1050px" }}>
        <TabMenu>
          {menuArr.map((tap, index) => {
            return (
              <div
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
                style={{ width: tap.width }}
              >
                {tap.name}
              </div>
            );
          })}
        </TabMenu>
        <Box></Box>
        <div style={{ width: "1050px" }}>
          <div>{menuArr[currentTab].content}</div>
        </div>
      </div>
    </>
  );
};
