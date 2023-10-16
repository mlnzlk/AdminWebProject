import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function MenuGrid({ apiUrl }) {
    const [dataList, setDataList] = useState([]);
    
    useEffect(() => {
        if (apiUrl !== "") {
            axios.get(apiUrl)
                .then((response) => {
                    console.log(response.data); 
                    setDataList(response.data.data);
                })
                .catch((error) => console.error(`Error!!!: ${error}`));
        }
    }, [apiUrl]);
    
    const navigate = useNavigate();

    return (
        <div style={{
            overflowY: 'auto', 
            maxHeight: '760px', 
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
            }}>
                {dataList.map((item) => (
    <button 
        key={item.productId}
        style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            background: 'none', // 버튼 배경색 제거
            border: 'none', // 버튼 테두리 제거
            cursor: 'pointer' // 마우스 커서를 포인터로 변경
        }}
        onClick={() => {
            navigate('/editmenu');
                }}
    >
        <img src={item.url} alt={item.name} style={{ width: '100%' }} />
        <Box> <p style={{ fontSize: '24px' }}>{item.name}</p></Box>
    </button>
))}

            </div>
        </div>
    );
}

export const Box = styled.div`
  background: #D9D9D9;
  fontSize: 24px;
  width: 264px;
  height: 44px;
  padding: 0;
  margin-top: 10px;  
  border-radius: 4px;
  border: none;
  display:flex; 
  justify-content:center; 
  align-items:center; 
`;