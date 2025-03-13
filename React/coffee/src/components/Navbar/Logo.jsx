import React from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = () => {
    return (
        <>
            <div>
                <a className="navbar-brand fs-2" href="#" >
                    <FontAwesomeIcon icon={faCoffee} />
                    <span>Coffee</span>
                </a>
            </div>
        </>
    )
}

export default Logo
