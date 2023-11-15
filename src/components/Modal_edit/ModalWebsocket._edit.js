import { React, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ModalIngredient = ({ closeModal, productId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    closeModal(false);

    // 서버에 delete 요청 보내기
    const url = `${process.env.REACT_APP_API_SERVER_URL}/api/v1/product/${productId}`;
    axios
      .delete(url)
      .then((response) => {
        console.log("메뉴 삭제 성공!!:", response);
        navigate("/menumanagement");
      })
      .catch((error) => {
        console.error("메뉴 삭제 실패ㅠㅠ:", error);
      });
  };

  return (
    <>
      <Container1>
        <ModalBlock>
          <Label style={{ marginTop: "91px", fontWeight: "600" }}>
            메뉴를 삭제하시겠습니까?
          </Label>

          {/* 버튼11부분 코드 메뉴수정.js에 옮기기 + 이 부분 onclick 로직에 서버에 메뉴코드 보내는 로직 추가하기 */}
          <Label style={{ marginTop: "24px", fontWeight: "400" }}>
            메뉴를 삭제할 경우 모든 데이터가 삭제됩니다.
          </Label>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button1 style={{ marginTop: "91px" }} onClick={handleClick}>
              네
            </Button1>
            <Button2
              style={{ marginTop: "91px" }}
              onClick={() => closeModal(false)}
            >
              {" "}
              이전으로 돌아가기{" "}
            </Button2>
          </div>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: white;
  color: black;
  width: 987px;
  height: 400px;
  z-index: 101;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-style: normal;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
`;

const Button1 = styled.button`
  font-family: "Pretendard";
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  background: #000000;
  width: 493px;
  height: 120px;
  border: none;
  border-radius: 0 0 0 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Button2 = styled.button`
  font-family: "Pretendard";
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  background: #808080;
  width: 494px;
  height: 120px;
  border-radius: 0 0 20px 0;

  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default ModalIngredient;
