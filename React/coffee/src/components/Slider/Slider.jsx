import React from 'react'
import Imgslider from './Imgslider'

const Slider = () => {
    let imgClasses = ["slider1", "slider2", "slider3", "slider4"]
    return (
        <>
            <div className="bxslider">
                <Imgslider imgclass={imgClasses} />
            </div>
        </>
    )
}

export default Slider
