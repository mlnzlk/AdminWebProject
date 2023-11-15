import styled from "styled-components";

export const Container1 = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 8px;
`;
export const ContainerI = styled.div`
  margin: 8px 0 0 20px;
  border-radius: 16px 16px 0px 0px;
  background-color: #f2f4fc;
  width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ContainerH = styled.div`
  margin: 8px 0 0 20px;
  border-radius: 16px 16px 0px 0px;
  background-color: #fde9e5;
  width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ContainerList = styled.div`
  margin: 0 0 0 20px;
  border-radius: 0px 0px 6px 16px;
  background-color: #f6f6f6;
  width: 1200px;
  height: 400px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 6px;
    margin-right: 10px; /* 으잉 왜 적용 안 돼잉 */
  }
`;

export const ListContent = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 20px 12px 20px;
  width: 1146px;
  height: 74px;
  background: #efefef;
  border-radius: 20px;
  fontsize: ;
`;

export const Input1 = styled.input`
  font-size: 20px;
  font-family: "Pretendard";

  background-color: #f6f6f6;
  height: 62px;
  width: 430px;
  padding-left: 29px;
  border: 1px solid #cccccc;
  border-radius: 16px;
  margin-left: 24px;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari */
    color: gray;
  }
`;

export const Select = styled.select`
  margin-left: 4px;
  padding-left: 5px;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "Pretendard";
  background-color: white;
  border-radius: 16px;
  width: 197px;
  height: 66px;
  padding-left: 15px;
  border: 1px solid #cccccc;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 247px;
  height: 63px;
  border-radius: 16px;
  margin-left: 10px;
  border: 1px solid #cccccc;
`;

export const Button1 = styled.button`
  font-size: 20px;
  font-family: "Pretendard";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123.5px;
  height: 62px;
  border: none;
  background-color: ${(props) => (props.clicked ? "#F0F2FB" : "#FFFFFF")};
  border-radius: 16px;
  transition: 0.5s;
`;

export const Button2 = styled.button`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123.5px;
  height: 62px;
  border: none;
  background-color: ${(props) => (props.clicked ? "#FDE9E5" : "#FFFFFF")};
  border-radius: 16px;
  transition: 0.5s;
`;

export const Button3 = styled.button`
  width: 238px;
  height: 63px;
  background: #d9d9d9;
  border-radius: 16px;
  border: none;
  transition: 0.5s;
  margin-left: 10px;
  padding-left: 24px;
  text-align: left;
  font-size: 20px;
  font-family: "Pretendard";

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Button4 = styled.button`
  width: 232px;
  height: 52px;
  transition: 0.5s;
  margin-top: 12px;
  margin-left: 24px;
  background: #d9d9d9;
  border-radius: 16px;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Button5 = styled.button`
  height: 47px;
  width: 192px;
  transition: 0.5s;
  margin: 15px 10px 0 0;
  background-color: #d9d9d9;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Button6 = styled.button`
  background-color: #d7dfff;
  width: 192px;
  height: 68px;
  color: black;
  transition: 0.5s;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 20px;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Button7 = styled.button`
  background-color: #ffb6a6;
  width: 192px;
  height: 68px;
  color: black;
  transition: 0.5s;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 20px;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Button8 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 32px;
  background: #f6f6f6;
  width: 236px;
  height: 85px;
  color: black;
  transition: 0.5s;
  border-radius: 21px;
  border: none;
  margin: 16px 0 0 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const Button9 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 32px;
  background: #bdc8f0;
  width: 935px;
  height: 85px;
  color: black;
  transition: 0.5s;
  border-radius: 21px;
  border: none;
  margin: 16px 0 0 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const Button10 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 32px;
  background: #fedbd4;
  width: 935px;
  height: 85px;
  color: black;
  transition: 0.5s;
  border-radius: 21px;
  border: none;
  margin: 16px 0 0 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const Button11 = styled.button`
  height: 56px;
  width: 192px;
  transition: 0.5s;
  margin: 0 0 0 10px;
  background-color: ${(props) => (props.zeroQuantity ? "#F6F6F6" : "#FFFFFF")};
  color: ${(props) => (props.zeroQuantity ? "#ADADAD" : "#000000")};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonX = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
