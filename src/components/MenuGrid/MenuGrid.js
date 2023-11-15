import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MenuGrid({ apiUrl }) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (apiUrl !== "") {
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response.data);
          setDataList(response.data.data);
        })
        .catch((error) => console.error(`Error!!!: ${error}`));
    }
  }, [apiUrl]);

  const navigate = useNavigate();

  return (
    <div
      style={{
        overflowY: "auto",
        maxHeight: "736px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {dataList.map((item) => (
          <button
            key={item.productId}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "none",
              border: "1px solid #D9D9D9",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
              width: "270px",
            }}
            onClick={() => navigate(`/editmenu/${item.productId}`)} // 레시피 데이터 불러올 때, 어떤 메뉴의 레시피인지 알기 위한 productId값 개별적으로 할당
          >
            <img src={item.url} alt={item.name} style={{ width: "100%" }} />
            <Box>
              {" "}
              <p style={{ fontSize: "22px" }}>{item.name}</p>
            </Box>
          </button>
        ))}
      </div>
    </div>
  );
}

export const Box = styled.div`
  background: #d9d9d9;
  fontsize: 24px;
  width: 254px;
  height: 44px;
  padding: 0;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
