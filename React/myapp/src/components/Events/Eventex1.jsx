import React from 'react'

const Eventex1 = () => {
    const showpop = () => {
        alert("Hello world")
    }

    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={showpop}>Click Here</button>
            </div>
        </>
    )
}

export default Eventex1
