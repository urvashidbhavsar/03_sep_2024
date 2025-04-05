import React, { useEffect, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const Showdata = () => {
    const [getdata, setGetdata] = useState([])
    // create for fetch data
    const [editdata, setEditdata] = useState(null)
    // update data
    const [updatedata, setUpdatedata] = useState("")

    const fetchdata = async () => {
        let data = await JSON.parse(localStorage.getItem("empdata"))
        setGetdata(data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }
    // for fetch
    const fetchEdit = (id) => {
        setEditdata(id)
        setUpdatedata(id)
    }

    const handleChange = (e) => {
        setUpdatedata({ ...updatedata, [e.target.name]: e.target.value })
    }

    const handleUpdate = () => {
        let update = getdata.map(item => editdata.id === item.id ? updatedata : item)
        setUpdatedata(update)
        localStorage.setItem("empdata", JSON.stringify(update))
    }

    const deleteData = (id) => {
        let deletedata = getdata.filter(item => item.id !== id)
        setGetdata(deletedata)
        localStorage.setItem("empdata", JSON.stringify(deletedata))
        fetchdata()
    }
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>DOj</th>
                        <th>Profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getdata.map(item =>
                            // console.log(item)
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ename}</td>
                                <td>{item.email}</td>
                                <td>₹ {item.salary}</td>
                                <td>{item.doj}</td>
                                <td>
                                    <img src={item.profile} style={setimg} />
                                </td>
                                <td>
                                    <button className='btn btn-info mx-1' data-bs-toggle="modal" data-bs-target="#editmodal" onClick={() => fetchEdit(item)}>Edit</button>
                                    <button className='btn btn-danger mx-1' onClick={() => deleteData(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div className="modal fade" id="editmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <Modal.Header>
                            <Modal.Title>Edit Details</Modal.Title>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleUpdate}>
                                <Form.Group className="mb-3">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="number" name="id" required disabled value={updatedata.id} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="ename" value={updatedata.ename} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" required value={updatedata.email} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type="number" name="salary" required value={updatedata.salary} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Joining</Form.Label>
                                    <Form.Control type="date" name="doj" required disabled value={updatedata.doj} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control type="text" required name='profile' value={updatedata.profile} onChange={handleChange} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </Modal.Body>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showdata
