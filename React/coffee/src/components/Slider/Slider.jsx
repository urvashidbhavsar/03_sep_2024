import React from 'react'
import Imgslider from './Imgslider'

const Slider = () => {
    // let imgClasses = ["slider1", "slider2", "slider3", "slider4"]

    let imgClasses = [
        {
            classname: "slider1",
            boldtext: "Coffee time",
            lighttext: "is a change to slowdown"
        },
        {
            classname: "slider2",
            boldtext: "Coffee",
            lighttext: "make us fresh & active"
        },
        {
            classname: "slider3",
            boldtext: "We provide",
            lighttext: "the best teste coffee"
        },
        {
            classname: "slider4",
            boldtext: "We Offers",
            lighttext: "you the best coffee products"
        }
    ]

    return (
        <>
            <div className="bxslider">
                <Imgslider imgcls={imgClasses} />
            </div>
        </>
    )
}

export default Slider
