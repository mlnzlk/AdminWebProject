import React from "react";
import SidebarItem from "./SidebarItem";
import Limage from "../../assets/Logo.png";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  font-size: 20px;
  background-color: #3d3d3d;
  flex-direction: column;

  width: 172px;
  height: 802px;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 80px;
`;

const Label = styled.label`
  font-size: 32px;
  color: white;
`;

const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 65px;
  height: ${(props) => (props.isExpanded ? "105px" : "65px")};
  margin-bottom: ${(props) => (props.isExpanded ? "10px" : "")};
  transition: height 0.5s ease-in-out, margin-bottom 0.5s ease-in-out;
`;

const Select = styled.select`
  padding-left: 5px;
  display: flex;
  color: #a6a6a6;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: #1e1e1e;
  border: 1px solid #818181;
  border-radius: 8px;
  width: 134px;
  height: 40px;
`;

const Menu = styled.div`
  color: black;
  width: 172px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const StyledNavLink = styled(Link)`
  font-size:20px; 
  color: #B9B9B9;
  text-decoration: none;


  display: block; // 항목 전체에 배경색이 적용되도록 block으로 설정
  align-items: center; // 세로 방향 중앙 정렬
  justify-content : flex-end;	
  z-index:1; 
  &.active {
    display: flex; // 항목 전체에 배경색이 적용되도록 flex로 설정
    align-items: center; // 세로 방향 중앙 정렬
    justify-content: right; // 가로 방향 중앙 정렬
    width: 157.5px;
    height: 66px;
    color: white;
    background-color: #171717; // 여기에서 원하는 배경색으로 설정하세요.
    transition: 0.5s;
    padding: 7px;
ㅤ    z-index:1; 
  }
`;

const StyledImage = styled.img`
  width: 70px;
  height: 34px;
  margin: 500px 0 0 50px;
`;

function Sidebar() {
  // 이 부분에서 알바생 로그인시 Menu 랑 Add Menu 메뉴 안 보이게 하기
  const menus = [
    { name: "Cleaning Mode", path: "/cleaningmode" },
    { name: "Menuㅤ", path: "/menumanagement" },
    { name: "Add Menu", path: "/addmenu" },
  ];

  return (
    <Side>
      <Box1>
        {" "}
        <Label>Manager</Label>{" "}
      </Box1>
      <Box2>
        <Select>
          <option value="option1">성수 1호점ㅤ</option>
          <option value="option2">건대 2호점ㅤ</option>
        </Select>
      </Box2>

      <Menu>
        {menus.map((menu, index) => {
          return (
            <StyledNavLink
              exact
              to={menu.path}
              key={index}
              activeClassName="active"
            >
              <SidebarItem menu={menu} />
            </StyledNavLink>
          );
        })}
      </Menu>

      <StyledImage src={Limage} />
    </Side>
  );
}

export default Sidebar;
