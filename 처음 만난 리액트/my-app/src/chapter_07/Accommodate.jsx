import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); // useState, useEffect 를 사용한 커스텀 훅

    /**
     * [의존성 배열이 없는 useEffect()]
     * 컴포넌트가 렌더링될 때마다 useEffect()가 호출되도록 설정
     */
    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });

    /**
     * [의존성 배열이 있는 useEffect()]
     * count 값이 변경될 때만 useEffect()가 호출되도록 의존성 배열을 설정
     */
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); // 정원이 가득 찼다면 재렌더링 되고 count 값에 변화가 없으므로 아래 console.log()는 출력되지 않음
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;