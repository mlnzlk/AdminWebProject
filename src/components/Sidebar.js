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
  `
  const Menu = styled.div`
  color: black;
  width: 200px;
  display: flex;
  flex-direction: column;
`

  function Sidebar() {

    const menus = [
        { name: "청소모드", path: "/cleaning" },
        { name: "메뉴관리", path: "/managemenu" }
      ];

      return (
        <Side>
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
