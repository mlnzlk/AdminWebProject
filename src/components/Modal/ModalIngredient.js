import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Close from "../../assets/close.png";

const ModalIngredient = ({ closeModal }) => {
  const [isButton1Clicked, setButton1Clicked] = useState(true);
  const [isButton2Clicked, setButton2Clicked] = useState(false);
  const [isButton3Clicked, setButton3Clicked] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleButton1Click = () => {
    if (!isButton1Clicked) {
      setButton1Clicked(true);
      setButton2Clicked(false);
      setButton3Clicked(false);
    }
  };

  const handleButton2Click = () => {
    if (!isButton2Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(true);
      setButton3Clicked(false);
    }
  };

  const handleButton3Click = () => {
    if (!isButton3Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(false);
      setButton3Clicked(true);
    }
  };

  useEffect(() => {
    // 서버에서 데이터를 가져오는 Axios 요청
    axios
      .get(
        `${process.env.REACT_APP_API_SERVER_URL}/api/v1/ingredient/model/category/1`
      )
      .then((response) => {
        // 서버 응답에서 데이터를 추출하고 Ingredients 배열 업데이트
        console.log(response.data);
        setIngredients(response.data.data);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedIngredients((prevSelectedIngredients) => [
        ...prevSelectedIngredients,
        value,
      ]);
    } else {
      setSelectedIngredients((prevSelectedIngredients) =>
        prevSelectedIngredients.filter((ingredient) => ingredient !== value)
      );
    }
  };

  return (
    <>
      <Container1>
        <ModalBlock>
          <Button4 onClick={() => closeModal(false)}>
            <img
              style={{
                width: "36px",
                height: "36px",
                margin: "-10px 0px 0px 690px",
              }}
              src={Close}
            />
          </Button4>
          <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>
            베이스 {isButton1Clicked && <Box1 />}
          </Button1>
          <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>
            시럽 {isButton2Clicked && <Box1 />}
          </Button2>
          <Button3 clicked={isButton3Clicked} onClick={handleButton3Click}>
            토핑 {isButton3Clicked && <Box1 />}
          </Button3>
          <Box2></Box2>

          <Container2>
            {ingredients.map((ingredient) => (
              <CheckboxLabel key={ingredient.menuCode}>
                <CheckboxInput
                  type="checkbox"
                  value={ingredient.name}
                  checked={selectedIngredients.includes(ingredient.name)}
                  onChange={handleCheckboxChange}
                />
                {ingredient.name}
              </CheckboxLabel>
            ))}
          </Container2>

          <Container4>
            {selectedIngredients.map((ingredient) => (
              <div key={ingredient}>{ingredient}</div>
            ))}
          </Container4>
          <Container3>
            <Button5 onClick={() => closeModal(false)}>확인</Button5>
          </Container3>
        </ModalBlock>
        <Background />
      </Container1>
    </>
  );
};

const Container1 = styled.div`
  position: fixed;
  width: 1440px;
  height: 882px;
  z-index: 100;
  top: 10px;
  left: 10px;

  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 1440px;
  height: 882px;
  background-color: rgba(255, 255, 255, 0.15);
  background: #383838;
  opacity: 0.5;
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 20px;
  padding: 1.5rem;
  background-color: white;
  color: black;
  width: 730px;
  height: 615px;
  box-shadow: 1px 1px 1px 1px gray;
  z-index: 101;
`;

const Button1 = styled.button`
  font-size: 24px;
  background: none;
  height: 65px;
  width: 123px;
  margin: -8px 0 0 11px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const Button2 = styled.button`
  font-size: 24px;
  background: none;
  height: 65px;
  width: 123px;
  margin: -8px 0 0 11px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const Button3 = styled.button`
  font-size: 24px;
  background: none;
  height: 65px;
  width: 123px;
  margin: -8px 0 0 11px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 8px;
  background: #808080;
  margin: 10px 0 0 -5px;
`;

const Button4 = styled.button`
  background: none;

  margin: 0px 0 0 11px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 778px;
  height: 2px;
  background: #d9d9d9;
  margin: -7px 0 0 -24px;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 778px;
  height: 390px;
  margin: -2px 0 0 -24px;
`;

export const Container3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 778px;
  height: 190px;
  background: #f6f6f6;
  border-radius: 0 0 20px 20px;
`;

export const Container4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 778px;
  height: 390px;
`;

const Button5 = styled.button`
  font-size: 24px;
  background: #d9d9d9;
  height: 82px;
  width: 720px;
  margin: -10px 0 0 0;
  border: none;
  border-radius: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
`;

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export default ModalIngredient;
