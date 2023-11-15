import { React, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import MenuGrid from "../../components/MenuGrid/MenuGrid";

export default function Menu() {
  const [isButton1Clicked, setButton1Clicked] = useState(true);
  const [isButton2Clicked, setButton2Clicked] = useState(false);
  const [isButton3Clicked, setButton3Clicked] = useState(false);
  const [isButton4Clicked, setButton4Clicked] = useState(false);

  const [apiUrl, setApiUrl] = useState(
    `${process.env.REACT_APP_API_SERVER_URL}/api/v1/product/category/1`
  ); // 초기값 설정

  const handleButton1Click = () => {
    if (!isButton1Clicked) {
      console.log(process.env.REACT_APP_API_SERVER_URL);
      setButton1Clicked(true);
      setButton2Clicked(false);
      setButton3Clicked(false);
      setButton4Clicked(false);
      setApiUrl(
        `${process.env.REACT_APP_API_SERVER_URL}/api/v1/product/category/1`
      );
    }
  };

  const handleButton2Click = () => {
    if (!isButton2Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(true);
      setButton3Clicked(false);
      setButton4Clicked(false);
      setApiUrl(
        `${process.env.REACT_APP_API_SERVER_URL}/api/v1/product/category/2`
      );
    }
  };

  const handleButton3Click = () => {
    if (!isButton3Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(false);
      setButton3Clicked(true);
      setButton4Clicked(false);
      setApiUrl(
        `${process.env.REACT_APP_API_SERVER_URL}/api/v1/product/category/3`
      );
    }
  };

  const handleButton4Click = () => {
    if (!isButton4Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(false);
      setButton3Clicked(false);
      setButton4Clicked(true);
      setApiUrl(
        `${process.env.REACT_APP_API_SERVER_URL}/api/v1/product/category/4`
      );
    }
  };

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "1168px" }}>
      <Container>
        <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>
          커피
        </Button1>
        <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>
          티&라떼
        </Button2>
        <Button3 clicked={isButton3Clicked} onClick={handleButton3Click}>
          에이드
        </Button3>
        <Button4 clicked={isButton4Clicked} onClick={handleButton4Click}>
          스파클링
        </Button4>
        <Button5 onClick={() => navigate("/addmenu")}>메뉴추가</Button5>
      </Container>

      <Container
        style={{
          overflowY: "auto",
          width: "1168px",
          maxHeight: "760px",
          scrollbarWidth: "thin",
          margin: "25px 0 0 15px",
        }}
      >
        <MenuGrid style={{}} apiUrl={apiUrl}></MenuGrid>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button1 = styled.button`
  background-color: ${(props) => (props.clicked ? "#CCCCCC" : "#E6E6E6")};
  font-size: 24px;
  color: ${(props) => (props.clicked ? "black" : "#737373")};
  height: 48px;
  width: 160px;
  margin: 48px 8px 0 54px;
  border: none;
  transition: 0.5s;
  border-radius: 8px;
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
const Button2 = styled.button`
  background-color: ${(props) => (props.clicked ? "#CCCCCC" : "#E6E6E6")};
  font-size: 24px;
  color: ${(props) => (props.clicked ? "black" : "#737373")};
  height: 48px;
  width: 160px;
  margin: 48px 8px 0 0;
  border: none;
  transition: 0.5s;
  border-radius: 8px;
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Button3 = styled.button`
  background-color: ${(props) => (props.clicked ? "#CCCCCC" : "#E6E6E6")};
  font-size: 24px;
  color: ${(props) => (props.clicked ? "black" : "#737373")};
  height: 48px;
  width: 160px;
  margin: 48px 8px 0 0;
  border: none;
  transition: 0.5s;
  border-radius: 8px;
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Button4 = styled.button`
  background-color: ${(props) => (props.clicked ? "#CCCCCC" : "#E6E6E6")};
  font-size: 24px;
  color: ${(props) => (props.clicked ? "black" : "#737373")};
  height: 48px;
  width: 160px;
  margin: 48px 0 0 0;
  border: none;
  transition: 0.5s;
  border-radius: 8px;
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Button5 = styled.button`
  background-color: #e6e6e6;
  font-size: 24px;
  color: black;
  height: 48px;
  width: 235px;
  margin: 48px 0 0 403px;
  border: none;
  transition: 0.5s;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;
