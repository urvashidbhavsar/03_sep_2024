import React, { useState } from 'react'

const Example1 = () => {
    const [count, setCount] = useState(0);

    // create event
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>{count}</p>
        </>
    )
}

export default Example1
