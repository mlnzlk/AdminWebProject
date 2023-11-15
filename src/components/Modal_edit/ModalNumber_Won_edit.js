import { React, useState } from "react";
import styled from "styled-components";

const ModalNumber_Won = ({ closeModal, setValue }) => {
  const handleOutsideClick = (e) => {
    // 모달창 외부 누르면 모달창 닫히게 해주는 로직
    if (e.target.id === "background") {
      closeModal(false);
    }
  };

  const [calc, setCalc] = useState("");
  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  const getNum = (e) => {
    setCalc((prev) => prev + e.target.value);
  };

  const delCalc = () => {
    setPointCheck(true);
    setOperCheck(true);
    let str = String(calc).slice(0, -1);
    setCalc((prev) => str);
  };

  //ModalNumber_Won으로부터 받은 값을 해당 상태값에 설정하는 함수
  const confirmAndClose = () => {
    closeModal(false);
    setValue(calc);
  };

  return (
    <>
      <Container1 onClick={handleOutsideClick}>
        <ModalBlock>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MainContainer>
              <InputBar readOnly value={calc} />
              <ButtonContainer>
                <ButtonNumber value={1} onClick={getNum}>
                  1
                </ButtonNumber>
                <ButtonNumber value={2} onClick={getNum}>
                  2
                </ButtonNumber>
                <ButtonNumber value={3} onClick={getNum}>
                  3
                </ButtonNumber>
                <ButtonNumber value={4} onClick={getNum}>
                  4
                </ButtonNumber>
                <ButtonNumber value={5} onClick={getNum}>
                  5
                </ButtonNumber>
                <ButtonNumber value={6} onClick={getNum}>
                  6
                </ButtonNumber>
                <ButtonNumber value={7} onClick={getNum}>
                  7
                </ButtonNumber>
                <ButtonNumber value={8} onClick={getNum}>
                  8
                </ButtonNumber>
                <ButtonNumber value={9} onClick={getNum}>
                  9
                </ButtonNumber>
                <ZeroButton value={0} onClick={getNum}>
                  0
                </ZeroButton>

                <ButtonDEL onClick={delCalc}> ← </ButtonDEL>
              </ButtonContainer>
            </MainContainer>

            <ButtonClose onClick={confirmAndClose}> 확인 </ButtonClose>
          </div>
        </ModalBlock>

        <Background id="background" />
      </Container1>
    </>
  );
};

const Container1 = styled.div`
  position: fixed;
  width: 454px;
  height: 600px;
  z-index: 100;

  top: 83px;
  left: 200px;
  right: 0px;
  bottom: 0px;

  display: flex;
`;

const Background = styled.div`
  position: fixed;
  width: 1440px;
  height: 882px;
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 20px;
  background-color: white;
  color: black;

  width: 454px;
  height: 600px;

  border: 5px solid #dedede;
  z-index: 101;
`;

const ButtonClose = styled.button`
  background: #d9dff6;
  width: 454px;
  height: 111px;
  border-radius: 0px 0px 20px 20px;
  font-size: 32px;
  font-weight: 600;
  font-family: "Pretendard";

  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 454px;
  height: 489px;
  border-radius: 20px 20px 0px 0px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  grid-template-rows: repeat(4, minmax(0, auto));
  gap: 0.5rem;

  grid-template-areas:
    "one two three"
    "four five six"
    "seven eight nine"
    "zero zero del";
`;

const ButtonNumber = styled.button`
  font-size: 36px;
  font-family: "Pretendard";

  color: #646464;
  background: #f8f8f8;
  height: 68px;
  width: 128px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin: 1px;

  &[value="1"] {
    grid-area: one;
  }
  &[value="2"] {
    grid-area: two;
  }
  &[value="3"] {
    grid-area: three;
  }
  &[value="4"] {
    grid-area: four;
  }
  &[value="5"] {
    grid-area: five;
  }
  &[value="6"] {
    grid-area: six;
  }
  &[value="7"] {
    grid-area: seven;
  }
  &[value="8"] {
    grid-area: eight;
  }
  &[value="9"] {
    grid-area: nine;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ZeroButton = styled(ButtonNumber)`
  grid-area: zero;
  width: 265px;
`;

const ButtonDEL = styled(ButtonNumber)`
  grid-area: del;
  background: #ebebeb;
  font-weight: bold;
  font-family: "Pretendard";
`;

const InputBar = styled.input`
  width: 382px;
  height: 101px;
  background: #f0f0f0;
  border-radius: 8px;

  margin-bottom: 10px;
  font-family: "Pretendard";

  font-size: 48px;
  font-weight: 600;

  color: black;

  border: none;
  text-align: right;
  padding-right: 20px;

  &:focus {
    outline: none;
  }
`;

export default ModalNumber_Won;
