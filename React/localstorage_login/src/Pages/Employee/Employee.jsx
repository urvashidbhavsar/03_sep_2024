import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import Showdata from './Showdata';

const Employee = () => {
    const [user, setUser] = useState({
        id: "",
        ename: "",
        email: "",
        salary: "",
        doj: "",
        profile: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let storedata = JSON.parse(localStorage.getItem("empdata")) || []
        let newdata = [...storedata, user]
        localStorage.setItem("empdata", JSON.stringify(newdata));
        alert("Added Successfully")
        setUser({
            id: "",
            ename: "",
            email: "",
            salary: "",
            doj: "",
            profile: "",
        })
    }

    return (
        <div>
            <Navbar />
            <Container className='py-5'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#regemp">
                    ➕ Add User
                </button>

                <div className="modal fade" id="regemp" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <Modal.Header>
                                <Modal.Title>Employee Details</Modal.Title>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="number" name="id" required onChange={handleChange} value={user.id} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="ename" onChange={handleChange} value={user.ename} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" required onChange={handleChange} value={user.email} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Salary</Form.Label>
                                        <Form.Control type="number" name="salary" required onChange={handleChange} value={user.salary} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Date of Joining</Form.Label>
                                        <Form.Control type="date" name="doj" required onChange={handleChange} value={user.doj} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.Control type="text" required onChange={handleChange} name='profile' value={user.profile} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </div>
                    </div>
                </div>

                <Showdata />
            </Container>
        </div>
    )
}

export default Employee
