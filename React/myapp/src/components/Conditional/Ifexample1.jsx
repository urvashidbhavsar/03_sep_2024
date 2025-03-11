import React from 'react'

const Ifexample1 = () => {
    let text = null
    // ternary operator
    let res = text ?
        <div className="alert alert-primary" role="alert">
            {text}
        </div>
        :
        <div className="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    return (
        <>
            {res}
        </>
    )
}

export default Ifexample1
