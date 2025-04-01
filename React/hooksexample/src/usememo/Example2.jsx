import React, { useMemo, useState } from 'react'
const Example2 = () => {
    // const Example2 = ({ count }) => {
    // const computedValue = useMemo(() => {
    //     console.log("Computing...");
    //     let total = 0;
    //     for (let i = 0; i < 1e6; i++) {
    //         total += i;
    //     }
    //     let c = Number(count)
    //     let res = c + total;
    //     console.log(typeof res)
    //     return res
    // }, [count]); // Recompute only when `count` changes 
    let [count, setCount] = useState(0)

    const increment = useMemo(() => {
        return count
    }, [count])

    return <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>{increment}</p>
        {/* <p>{typeof computedValue}</p> */}
        {/* <p>Computed Value: {computedValue}</p> */}
    </div>;
};

export default Example2
