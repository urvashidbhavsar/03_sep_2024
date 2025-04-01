import React, { useCallback, useState } from 'react'

const Example3 = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <button onClick={increment}>Add</button>
            <p>{count}</p>
        </div>
    )
}

export default Example3
