import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

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
                            <div key={item.productId}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={item.url} alt={item.name} style={{ width: '100%' }} />
                        <Box> <p style={{ fontSize: '24px' }}>{item.name}</p></Box>
                    </div>
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