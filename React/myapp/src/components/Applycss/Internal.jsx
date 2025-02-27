import React from 'react'

const Internal = () => {
    // for internal use create a object for css 
    let mycss = {
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        margin: "20px",
    }
    let mycss1 = {
        backgroundColor: "crimson",
        color: "white",
        padding: "20px",
        margin: "20px",
    }
    return (
        <div>
            <h1 style={mycss}>Internal File</h1>
            <h1 style={mycss1}>Internal File</h1>
        </div>
    )
}

export default Internal
