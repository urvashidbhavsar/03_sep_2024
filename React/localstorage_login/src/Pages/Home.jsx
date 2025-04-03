import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    let getuser = localStorage.getItem("loguser")

    const logout = () => {
        localStorage.removeItem("loguser")
        navigate("/")
    }

    return (
        <>
            <Container>
                <div className='d-flex justify-content-between'>
                    <h1>Logo</h1>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='m-0'>Welcome {getuser}</p>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
