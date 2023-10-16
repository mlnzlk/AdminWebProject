// App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

import LogIn from "./pages/LogIn/LogIn";
import CleaningMode from "./pages/CleaningMode/CleaningMode";
import MenuManagement from "./pages/MenuManagement/MenuManagement";
import AddMenu from "./pages/AddMenu/AddMenu";
import EditMenu from "./pages/EditMenu/EditMenu";

import Sidebar from "./components/Sidebar/Sidebar";

const PageLayout = styled.div`
  display: flex; 
`;

const Content = styled.div`
  flex-grow: 1; 
`;

function App() {
  const location = useLocation(); // 현재 위치 정보 알려줌.

  return (

      <PageLayout>
        {location.pathname !== '/' && <Sidebar />} {/* 로그인 페이지가 아닐 때만 Sidebar 렌더링 */}
        <Content>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/cleaningmode" element={<CleaningMode />} />
            <Route path="/menumanagement" element={<MenuManagement />} />
            <Route path="/addmenu" element={<AddMenu />} />
            <Route path="/editmenu" element={<EditMenu />} />

          </Routes>
        </Content>

      </PageLayout>

  );
}

export default App;
