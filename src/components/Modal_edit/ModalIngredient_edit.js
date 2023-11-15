import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Close from "../../assets/close.png";

const ModalIngredient = ({
  closeModal,
  onConfirm: handleParentConfirm,
  menuData,
  setMenuData,
}) => {
  const [isButton1Clicked, setButton1Clicked] = useState(true);
  const [isButton2Clicked, setButton2Clicked] = useState(false);
  const [isButton3Clicked, setButton3Clicked] = useState(false);
  const [isButton4Clicked, setButton4Clicked] = useState(false);

  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleButton1Click = () => {
    if (!isButton1Clicked) {
      setButton1Clicked(true);
      setButton2Clicked(false);
      setButton3Clicked(false);
      setButton4Clicked(false);
    }
  };

  const handleButton2Click = () => {
    if (!isButton2Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(true);
      setButton3Clicked(false);
      setButton4Clicked(false);
    }
  };

  const handleButton3Click = () => {
    if (!isButton3Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(false);
      setButton3Clicked(true);
      setButton4Clicked(false);
    }
  };

  const handleButton4Click = () => {
    if (!isButton4Clicked) {
      setButton1Clicked(false);
      setButton2Clicked(false);
      setButton3Clicked(false);
      setButton4Clicked(true);
    }
  };

  useEffect(() => {
    let url = "";
    if (isButton1Clicked) {
      url = `${process.env.REACT_APP_API_SERVER_URL}/api/v1/ingredient/model/category/1`;
    } else if (isButton2Clicked) {
      url = `${process.env.REACT_APP_API_SERVER_URL}/api/v1/ingredient/model/category/2`;
    } else if (isButton3Clicked) {
      url = `${process.env.REACT_APP_API_SERVER_URL}/api/v1/ingredient/model/category/3`;
    } else if (isButton4Clicked) {
      url = `${process.env.REACT_APP_API_SERVER_URL}/api/v1/ingredient/model/category/4`;
    }

    // 서버에서 데이터를 가져오는 Axios 요청
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        // 데이터 형식이 예상과 같은지 확인
        if (Array.isArray(response.data.data)) {
          // "ingredientCode"가 20인 객체를 제외하고 checkbox에 표시
          const filteredIngredients = response.data.data.filter(
            (ingredient) => ingredient.ingredientCode !== 20
          );
          setIngredients(filteredIngredients);
        } else {
          console.error("Invalid data format: expected an array");
        }
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, [isButton1Clicked, isButton2Clicked, isButton3Clicked, isButton4Clicked]);

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

  const isButton6Enabled = selectedIngredients.length > 0;

  const handleButton7Click = (ingredient) => {
    setSelectedIngredients((prevSelectedIngredients) =>
      prevSelectedIngredients.filter(
        (selectedIngredient) => selectedIngredient !== ingredient
      )
    );
  };

  const handleButton6Click = () => {
    const selectedData = ingredients.filter((item) =>
      selectedIngredients.includes(item.ingredientName)
    );
    console.log("Selected data to send to parent component:", selectedData); // selectedData 로그 출력
    handleParentConfirm(selectedData); // 선택한 데이터 전송
    closeModal(); // 모달 닫기
  };

  return (
    <>
      <Container1>
        <ModalBlock>
          <Button5 onClick={() => closeModal(false)}>
            <img
              style={{
                width: "36px",
                height: "36px",
                margin: "-10px 0px 0px 690px",
              }}
              src={Close}
            />
          </Button5>
          <Button1 clicked={isButton1Clicked} onClick={handleButton1Click}>
            베이스 {isButton1Clicked && <Box1 />}
          </Button1>
          <Button2 clicked={isButton2Clicked} onClick={handleButton2Click}>
            시럽 {isButton2Clicked && <Box1 />}
          </Button2>
          <Button3 clicked={isButton3Clicked} onClick={handleButton3Click}>
            토핑 {isButton3Clicked && <Box1 />}
          </Button3>
          <Button4 clicked={isButton4Clicked} onClick={handleButton4Click}>
            드리즐 {isButton4Clicked && <Box1 />}
          </Button4>
          <Box2></Box2>

          <Container2
            style={{
              overflowY: "auto",
              width: "760px",
              scrollbarWidth: "thin",
              marginTop: "40px",
            }}
          >
            <div style={{ margin: "0 0 0 46px" }}>
              {ingredients.map((ingredient) => (
                <CheckboxLabel key={ingredient.ingredientCode}>
                  <CheckboxInput
                    type="checkbox"
                    value={ingredient.ingredientName}
                    checked={selectedIngredients.includes(
                      ingredient.ingredientName
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <CheckboxCustom
                    checked={selectedIngredients.includes(
                      ingredient.ingredientName
                    )}
                  />
                  {ingredient.ingredientName}
                </CheckboxLabel>
              ))}
            </div>
          </Container2>

          <Container3>
            <SelectedIngredientsList>
              {selectedIngredients.map((ingredient) => (
                <SelectedIngredient key={ingredient}>
                  <Button7 onClick={() => handleButton7Click(ingredient)}>
                    <img
                      style={{ width: "15px", height: "15px" }}
                      src={Close}
                    />
                  </Button7>
                  {ingredient}
                </SelectedIngredient>
              ))}
            </SelectedIngredientsList>

            <Button6 enabled={isButton6Enabled} onClick={handleButton6Click}>
              {" "}
              확인{" "}
            </Button6>
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
  top: -50px;
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
const Button4 = styled.button`
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

const Button5 = styled.button`
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
  justify-content: left;
  align-items: left;
  flex-direction: column;
  width: 778px;
  height: 390px;
  margin: -2px 0 0 -24px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 6px;
    margin-right: 10px; /* 으잉 왜 적용 안 돼잉 */
  }
`;

export const Container3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  width: 778px;
  height: 190px;
  margin: -2px 0 0 -24px;
  background: #f6f6f6;
  border-radius: 0 0 20px 20px;
`;

export const Container4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button6 = styled.button`
  font-size: 24px;
  background-color: ${(props) => (props.enabled ? "black" : "#D9D9D9")};
  color: ${(props) => (props.enabled ? "white" : "black")};
  height: 82px;
  width: 720px;
  margin-top: auto;
  margin-bottom: 15px;
  border: none;
  border-radius: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Button7 = styled.button`
  background: none;
  height: 40px;
  width: 40px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const SelectedIngredientsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedIngredient = styled.div`
  padding: 5px 10px 5px 0;
  background: #d9d9d9;
  border: 1.37915px solid #959595;
  border-radius: 11.0332px;
  margin: 24px 11px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 19.3081px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: left;
  margin-bottom: 28px;
  font-size: 20px;
  font-family: "Pretendard";
`;

const CheckboxInput = styled.input`
  display: none;
`;
const CheckboxCustom = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #000;
  background-color: ${(props) => (props.checked ? "#000" : "transparent")};
  margin-right: 20px;
  cursor: pointer;
`;
export default ModalIngredient;
