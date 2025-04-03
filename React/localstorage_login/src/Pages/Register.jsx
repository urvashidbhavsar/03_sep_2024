import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Container, Button } from 'react-bootstrap'

const Register = () => {
    const navigate = useNavigate()
    const [inp, setInp] = useState({
        uname: "",
        email: "",
        pwd: "",
    })

    const handleChange = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        let existdata = JSON.parse(localStorage.getItem("userreg")) || []
        let addnew = [...existdata, inp]
        localStorage.setItem("userreg", JSON.stringify(addnew))
        alert("Register successfully...")
        setInp({
            uname: "",
            email: "",
            pwd: "",
        })
        navigate("/")
    }

    return (
        <>
            <Container>
                <Form className='shadow w-50 mx-auto mt-5 p-4' onSubmit={handleRegister}>
                    <Row className='g-2'>
                        <h2>Register Here</h2>
                        <div className='col-12'>
                            <Form.Control type="text" placeholder="Username" value={inp.uname} onChange={handleChange} name='uname' />
                        </div>
                        <div className="col-12">
                            <Form.Control type="text" placeholder="Email" value={inp.email} onChange={handleChange} name='email' />
                        </div>
                        <div className='col-12'>
                            <Form.Control type='password' placeholder='Password' value={inp.pwd} onChange={handleChange} name='pwd' />
                        </div>
                        <div className="col-12">
                            <Button variant='primary' type='submit'>Register</Button>
                        </div>
                        <div className="col-12">
                            Already have account?
                            <Link to="/">Login</Link>
                        </div>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default Register
