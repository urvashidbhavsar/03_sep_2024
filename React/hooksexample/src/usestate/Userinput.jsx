import React, { useState } from 'react'

const Userinput = () => {
    const [input, setInput] = useState("");
    const [number, setNumber] = useState("")

    const handleChange = (e) => {
        setNumber(e.target.value)
    }

    return (
        <>
            <div className="container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

                <input type="text" value={number} onChange={handleChange} />

                <p>Text : <b>{input}</b></p>
                <p>Number: <b>{number}</b></p>
            </div>
        </>
    )
}

export default Userinput
