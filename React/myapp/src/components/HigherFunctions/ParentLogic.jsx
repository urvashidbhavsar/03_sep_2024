import React from 'react'

const ParentLogic = ({ mycollection }) => {
    return (
        <>
            {
                // here my collection is an array
                mycollection.map(img =>
                    <div className="col-3">
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                )
            }
        </>
    )
}

export default ParentLogic
