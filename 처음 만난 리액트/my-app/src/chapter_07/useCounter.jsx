import React, { useState } from 'react';

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);
    
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(Math.max(count - 1, 0));

    return [count, incrementCount, decrementCount];
}

export default useCounter;