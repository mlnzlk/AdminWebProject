import React, { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "./CheckboxContext";
import axios from "axios"; // Axios 라이브러리를 import

function Checkbox({ value }) {
  const { isChecked, toggleValue } = useContext(CheckboxContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // 서버에서 데이터를 가져오기 위한 Axios 요청
    axios.get("https://api.example.com/data") // 이 부분은 실제 서버 API의 URL로 대체해야 합니다.
      .then((response) => {
        const data = response.data; // 서버 응답에서 데이터를 추출
        const isChecked = data.includes(value); // 데이터에 value가 포함되는지 확인
        setChecked(isChecked); // 체크박스 상태 업데이트
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`); // 에러 처리
      });
  }, [value]);

  const handleCheckboxChange = () => {
    toggleValue(value); // CheckboxContext에서 상태 업데이트
    setChecked(!checked); // 로컬 상태 업데이트
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      {value}
    </label>
  );
}

export default Checkbox;
