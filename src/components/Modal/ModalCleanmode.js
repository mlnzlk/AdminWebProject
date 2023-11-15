import React, { useState } from 'react';
import styled from 'styled-components';

const ModalCleanmode = ({ closeModal, handleSocket }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    handleSocket(); // 웹소켓 열기 및 데이터1 보내기
    setButtonClicked(true); // 버튼1 클릭 상태를 true로 설정
    closeModal(); // 모달 닫기
  };

  return (
    <>
      <Container1>
        <ModalBlock>
          <Label style={{ marginTop: "130px", fontWeight: "600" }}>일시정지 누를 겁니까</Label>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonY
              style={{ marginTop: "111px", backgroundColor: buttonClicked ? 'orange' : '#000000' }}
              onClick={handleClick}
            >
              네
            </ButtonY>
            <ButtonN style={{ marginTop: "111px" }} onClick={() => closeModal(false)}> 아뇨 </ButtonN>
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
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
`;

const ButtonY = styled.button`
  font-family: 'Pretendard';
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

const ButtonN = styled.button`
  font-family: 'Pretendard';
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

export default ModalCleanmode;
