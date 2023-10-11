import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MenuGrid() {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        // 데이터를 로드
        axios.get('http://robros-alb-590302301.ap-northeast-2.elb.amazonaws.com/api/v1/product/category/1') // 데이터를 가져오는 API의 URL을 입력
            .then((response) => {
                setDataList(response.data); // API 응답 데이터를 dataList 상태로 설정
            })
            .catch((error) => console.error(`Error: ${error}`)); // 에러가 발생한 경우 콘솔에 에러 메시지를 출력
    }, []);

    return (
        <div style={{
            overflowY: 'auto', // 수직 스크롤을 허용하도록 설정
            maxHeight: '300px', // 스크롤 가능한 컨테이너의 최대 높이를 설정. 필요에 따라 조정 가능.
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
            }}>
                {dataList.map((item, index) => (
                    <div key={index}>
                        <img src={item.url} alt={item.name} style={{ width: '100%' }} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
