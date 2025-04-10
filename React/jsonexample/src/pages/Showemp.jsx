import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import List from './List'
import Updateemp from './Updateemp'
import Addemp from './Addemp'

const Showemp = () => {
    const [getdata, setGetdata] = useState([])
    const [update, setUpdate] = useState("")
    const des = List();
    // create state for filter by designation
    const [filterdata, setFilterdata] = useState("")
    // create state for sort
    const [sortdata, setSortdata] = useState(true)

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

    const filterAlldata = filterdata ?
        getdata.filter(item => item.designation === filterdata) : getdata

    getdata.sort((a, b) => {
        return sortdata === true ? a.id - b.id : b.id - a.id
    })
    const sortId = () => {
        setSortdata(sortdata === true ? false : true)
    }

    return (
        <>
            <div className="container">
                <Addemp fetchdata={fetchapidata} />

                <div className="row py-3">
                    <div className="col-4">
                        <div>Search: </div>
                        <select className='form-select' value={filterdata} onChange={(e) => setFilterdata(e.target.value)}>
                            <option>--- Designation ---</option>
                            {
                                des.map(des =>
                                    <option key={des} value={des}>
                                        {des}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </div>

                <h4 className='p-2 bg-success text-white'>Employee data</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID
                                <button onClick={sortId} className='mx-1 btn btn-dark'>
                                    <FontAwesomeIcon icon={sortdata ? faArrowUp : faArrowDown} />
                                </button>
                            </th>
                            <th>Employee name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Profile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterAlldata.length > 0 ?
                                filterAlldata.map(item =>
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
                                :
                                <tr>
                                    <td colSpan={6}>
                                        <div className="alert alert-danger" role="alert">
                                            No data Found!!!!
                                        </div>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>

                <Updateemp edit={update} setEdit={setUpdate} fetchdata={fetchapidata} />
            </div>
        </>
    )
}

export default Showemp
