import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GridComponent() {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        // 데이터를 로드합니다.
        axios.get('your-api-url')
            .then((response) => {
                setDataList(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // 4개의 열
            gap: '10px', // 셀 사이의 간격
        }}>
            {dataList.map((item, index) => (
                <div key={index}>
                    {/* item 데이터를 원하는 방식으로 표시합니다 */}
                    <img src={item.imageUrl} alt={item.name} style={{width: '100%'}}/>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}