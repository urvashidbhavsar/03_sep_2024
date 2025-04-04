import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === "admin" && pwd === "admin") {
            localStorage.setItem("loguser", email)
            navigate("/Home")
        } else {
            alert("Invalid Email and password!!!")
        }
    }

    return (
        <>
            <div className="container">
                <form className='w-50 mx-auto shadow p-4 mt-5' onSubmit={handleLogin}>
                    <h2>Admin Login</h2>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="text" placeholder='Email' className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder='Password' className='form-control' name='pwd' value={pwd} onChange={(e) => setPwd(e.target.value)} required />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary w-100' type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Adminlogin
