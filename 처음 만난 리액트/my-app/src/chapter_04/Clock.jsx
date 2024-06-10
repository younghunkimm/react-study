import React, { useState } from 'react';

function Clock(props) {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {date}</h2>
        </div>
    )
}

export default Clock;