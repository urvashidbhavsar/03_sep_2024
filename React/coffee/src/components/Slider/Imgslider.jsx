import React from 'react'

const Imgslider = ({ imgcls }) => {
    // let imgClasses = [
    //     {
    //         classname: "slider1",
    //         boldtext: "Coffee time",
    //         lighttext: "is a change to slowdown"
    //     },
    //     {
    //         classname: "slider2",
    //         boldtext: "Coffee",
    //         lighttext: "make us fresh & active"
    //     },
    //     {
    //         classname: "slider3",
    //         boldtext: "We provide",
    //         lighttext: "the best teste coffee"
    //     },
    //     {
    //         classname: "slider4",
    //         boldtext: "We Offers",
    //         lighttext: "you the best coffee products"
    //     }
    // ]
    return (
        <>
            {
                imgcls.map((items, i) =>
                    <div key={i} className={`slide ${items.classname}`}>
                        <div className='text-white display-2 title pb-3'>
                            <span className='fw-medium'>{items.boldtext} </span>
                            {items.lighttext}
                        </div>
                        <p className='text-white fs-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nemo ratione nihil recusandae perferendis magnam doloribus.
                        </p>
                        <div className='d-flex gap-3'>
                            <button className='btn btn-warning btn-lg'>Book a Table</button>
                            <button className='btn btn-light btn-lg'>About Us</button>
                        </div>
                    </div >
                )
            }

        </>
    )
}

export default Imgslider
