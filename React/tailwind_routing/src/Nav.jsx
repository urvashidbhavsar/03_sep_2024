import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    let menu = [
        { path: "/", pathname: "Home" },
        { path: "/About", pathname: "About" },
        { path: "/Contact", pathname: "Contact" },
    ]
    return (
        <>
            <ul>
                {
                    menu.map(items =>
                        <li key={items.path} className='text-red-500'>
                            <Link to={items.path}>{items.pathname}</Link>
                        </li>
                    )
                }
            </ul>

            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul> */}
        </>
    )
}

export default Nav
