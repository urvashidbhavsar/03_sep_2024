import React from 'react'

const Nav = ({ menuItems }) => {
    return (
        <>
            {
                menuItems.map(items =>
                    <li className="nav-item" key={items}>
                        <a className="nav-link fw-bold" href="#">{items}</a>
                    </li>
                )
            }
        </>
    )
}

export default Nav
