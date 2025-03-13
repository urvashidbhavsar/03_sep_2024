import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    let navmenu = ["Home", "About", "Menu", "Pages", "Blog", "Contact"]

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Logo />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homenav" aria-controls="homenav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-center" id="homenav">
                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center gap-4">
                            <Nav menuItems={navmenu} />
                            <li>
                                <a href="" className='text-dark'>
                                    <FontAwesomeIcon icon={faMoon} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
