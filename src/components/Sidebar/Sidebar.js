import React from "react";
import SidebarItem from "./SidebarItem";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  font-size: 20px;
  background-color: #D9D9D9;
  flex-direction: column;

  width: 172px;
  height: 882px;
  `;

  const Box1 = styled.div`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 172px;
  height: 88px;
  background-color: #989898;
  `;


  const Box2 = styled.div`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 172px;
  height: 60px;
  `;

  const Select = styled.select`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  font-size: 20px;
  background-color: #D9D9D9;
  border: none
  `;

  const Label = styled.label`
   font-size:32px; 
  `;

  const Menu = styled.div`
  color: black;
  width: 172px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  font-size:20px; 
  
  `;

  const StyledNavLink = styled(Link)`
  font-size:20px; 
  color: black;
  text-decoration: none;
  display: block; // 항목 전체에 배경색이 적용되도록 block으로 설정

  &.active {
    display: flex; // 항목 전체에 배경색이 적용되도록 flex로 설정
    align-items: center; // 세로 방향 중앙 정렬
    justify-content: center; // 가로 방향 중앙 정렬
    width: 172px;
    height: 40px;
    color: black;
    background-color: white; // 여기에서 원하는 배경색으로 설정하세요.
    transition: 0.5s;

  }
`;

  function Sidebar() {

    const menus = [
        { name: "청소모드", path: "/cleaningmode" },
        { name: "메뉴관리", path: "/menumanagement" }
      ];

      return (
        <Side>
          <Box1> <Label>관리자</Label> </Box1>
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
                    <SidebarItem
                        menu={menu}
                    />
                    </StyledNavLink>
                );
                })}
            </Menu>
        </Side>
      )
  }

  export default Sidebar;
