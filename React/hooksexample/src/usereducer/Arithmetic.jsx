import React, { useReducer } from 'react'

const initval = 1;
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state = state + 1
        case "subtract":
            return state = state - 1
        case "multiply":
            return state = state * 2
        case "reset":
            return 0
    }
}

const Arithmetic = () => {
    const [count, setCount] = useReducer(reducer, initval)
    return (
        <>
            <button onClick={() => setCount("add")}>Add</button>
            <button onClick={() => setCount("subtract")}>subtract</button>
            <button onClick={() => setCount("multiply")}>multiply</button>
            <button onClick={() => setCount("reset")}>reset</button>
            <p>{count}</p>
        </>
    )
}

export default Arithmetic
