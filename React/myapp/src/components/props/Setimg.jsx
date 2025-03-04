import React from 'react'

const Setimg = ({ imglink, size, alternate }) => {

    return (
        <>
            <div>
                <img src={imglink} style={size} alt={alternate} />
            </div>
        </>
    )
}

export default Setimg
