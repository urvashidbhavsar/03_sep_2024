import React from 'react'
import './nav.css'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <Logo />
                        <ul className="nav">
                            <Nav />
                        </ul>
                        <Search />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
