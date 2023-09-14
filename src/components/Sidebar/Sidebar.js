import React from "react";
import SidebarItem from "./SidebarItem";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  font-size: 20px;
  background-color: #D9D9D9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 960px;
  `;

  const Box1 = styled.div`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 240px;
  height: 88px;
  background-color: #989898;
  `;


  const Box2 = styled.div`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  width: 240px;
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
   font-weight: Bold; 
  `;

  const Menu = styled.div`
  color: black;
  width: 200px;
  display: flex;
  flex-direction: column;
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
                    <NavLink
                    exact
                    style={{color: "gray", textDecoration: "none"}}
                    to={menu.path}
                    key={index}
                    activeStyle={{color: "black"}}
                    >
                    <SidebarItem
                        menu={menu}
                    />
                    </NavLink>
                );
                })}
            </Menu>
        </Side>
      )
  }

  export default Sidebar;
