import React from 'react'

const Imgslider = ({ imgclass }) => {
    return (
        <>
            {
                imgclass.map(items =>
                    <div key={items} className={items}></div>
                )
            }

        </>
    )
}

export default Imgslider
