import { React, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModalTest_edit = ({ closeModal, handleButton6Click }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    closeModal(false);
  };

  return (
    <>
      <Container1>
        <ModalBlock>
          <Label style={{ marginTop: "91px", fontWeight: "600" }}>
            진짜 진짜 테스트하시겠습니까?
          </Label>
          <Label style={{ marginTop: "24px", fontWeight: "400" }}>
            바로 추출됩니다...?
          </Label>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button1 style={{ marginTop: "91px" }} onClick={handleButton6Click}>
              ㄱㄱ
            </Button1>
            <Button2
              style={{ marginTop: "91px" }}
              onClick={() => closeModal(false)}
            >
              {" "}
              안할래요{" "}
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
export default ModalTest_edit;
