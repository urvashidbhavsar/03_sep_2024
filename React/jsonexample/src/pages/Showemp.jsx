import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import List from './List'
import Updateemp from './Updateemp'

const Showemp = () => {
    const [getdata, setGetdata] = useState([])
    const [update, setUpdate] = useState("")

    const editData = (items) => {
        // setEdit(items)
        setUpdate(items)
    }

    const fetchapidata = async () => {
        await fetch("http://localhost:3000/employee", {
            method: "GET"
        })
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setGetdata(data))
    }
    const img = {
        height: "70px",
        width: "70px",
        objectFit: "contain"
    }

    useEffect(() => {
        fetchapidata()
    }, [])

    const DeleteData = async (id) => {
        if (confirm("Are you sure to want delete this data?")) {
            await fetch(`http://localhost:3000/employee/${id}`, {
                method: "DELETE",
            })
        }
        fetchapidata()
    }

    return (
        <>
            <div className="container">
                <h4 className='p-2 bg-success text-white'>Employee data</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Profile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.empname}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <img src={item.profile} style={img} />
                                    </td>
                                    <td>
                                        <button className='btn btn-info mx-1' data-bs-toggle="modal" data-bs-target="#updatemodal" onClick={() => editData(item)}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                        <button className="btn btn-danger mx-1" onClick={() => DeleteData(item.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <Updateemp edit={update} setEdit={setUpdate} fetchdata={fetchapidata} />
            </div>
        </>
    )
}

export default Showemp
