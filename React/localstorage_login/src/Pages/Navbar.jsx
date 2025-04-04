import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menu = [
        { path: "/Home", pathname: "Home" },
        { path: "/Employee", pathname: "Employee" },
    ]

    const navigate = useNavigate()
    let getuser = localStorage.getItem("loguser")

    const logout = () => {
        localStorage.removeItem("loguser")
        navigate("/")
    }
    return (
        <>
            <Container>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Logo</h1>
                    <ul className='list-unstyled d-flex gap-3 align-items-center p-0 m-0'>
                        {
                            menu.map(item =>
                                <li key={item.pathname}>
                                    <Link to={item.path}>{item.pathname}</Link>
                                </li>
                            )
                        }
                    </ul>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='m-0'>Welcome {getuser}</p>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar
