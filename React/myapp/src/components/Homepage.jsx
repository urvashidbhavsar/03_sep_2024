import React from 'react'
import Setimg from './props/Setimg'

const Homepage = () => {
    let setimg = {
        width: "100%",
        height: "500px",
        objectFit: "cover"
    }
    return (
        <>
            {/* <img src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg" alt="" style={setimg} /> */}

            <Setimg imglink="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg" size={setimg} alternate="Home Image" />
        </>
    )
}

export default Homepage
