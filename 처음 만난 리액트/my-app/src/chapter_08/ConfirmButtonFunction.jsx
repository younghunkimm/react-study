import React, { useState } from 'react';

function ConfirmButtonFunction(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfrim = () => {
        setIsConfirmed(prevIsConfirmed => !prevIsConfirmed);
    }

    return (
        <button
            onClick={handleConfrim}
            disabled={isConfirmed}
        >
            {isConfirmed ? '확인됨' : '확인하기'}
        </button>
    )
}

export default ConfirmButtonFunction;