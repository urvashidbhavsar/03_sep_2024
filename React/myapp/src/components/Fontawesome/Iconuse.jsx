import React from 'react'
import { faPadlet, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faMountainSun, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Iconuse = () => {
    return (
        <>
            <FontAwesomeIcon icon={faPadlet} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faMountainSun} />
            <FontAwesomeIcon icon={faFire} />
        </>
    )
}

export default Iconuse
