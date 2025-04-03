import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [loguser, setLoguser] = useState({
        email: "",
        pwd: "",
    })
    const handleChange = (e) => {
        setLoguser({ ...loguser, [e.target.name]: e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        let storedata = JSON.parse(localStorage.getItem("userreg")) || [];
        let finddata = storedata.find((email => loguser.email === email.email) && (pwd => loguser.pwd === pwd.pwd))
        if (finddata) {
            localStorage.setItem("loguser", loguser.email)
            navigate("/Home")
        } else {
            alert("Enter currect Email id and password!!!!")
        }
    }

    return (
        <>
            <div className="container">
                <form className='w-50 mx-auto shadow p-4 mt-5' onSubmit={handleLogin}>
                    <h2>Login Form</h2>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="text" placeholder='Email' className='form-control' value={loguser.email} onChange={handleChange} name='email' />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder='Password' className='form-control' value={loguser.pwd} onChange={handleChange} name='pwd' />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary' type="submit">Login</button>
                        </div>
                        <div className="col-12">
                            New User?
                            <Link to="/Register">Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
