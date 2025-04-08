import React, { use, useState } from 'react'
import Showemp from './Showemp'
import List from './List'

const Addemp = () => {
    const des = List()

    const [user, setUser] = useState({
        id: "",
        empname: "",
        salary: "",
        designation: "",
        profile: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let result = await fetch("http://localhost:3000/employee", {
            method: "POST",
            body: JSON.stringify(user)
        })

        if (result) {
            alert("data added successfully");
            setUser({
                id: "",
                empname: "",
                salary: "",
                designation: "",
                profile: ""
            })
        }

    }

    return (
        <>
            <div className="container py-3">
                <h3 className='bg-success text-white p-2'>Add User</h3>

                <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                        <div className="col-4">
                            <input type="number" name="id" placeholder='ID' className='form-control' onChange={handleChange} value={user.id} />
                        </div>
                        <div className="col-4">
                            <input type="text" name="empname" placeholder='Full name' className='form-control' onChange={handleChange} value={user.empname} />
                        </div>
                        <div className="col-4">
                            <input type="number" name="salary" placeholder='Salary' className='form-control' onChange={handleChange} value={user.salary} />
                        </div>
                        <div className="col-4">
                            <select name="designation" className='form-select' onChange={handleChange} value={user.designation}>
                                <option value="">--- Select Designation ---</option>
                                {
                                    des.map(des =>
                                        <option key={des} value={des}>
                                            {des}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-4">
                            <input type="text" name="profile" className='form-control' placeholder='Image URL' onChange={handleChange} value={user.profile} />
                        </div>
                        <div className="col-4">
                            <button className='btn btn-primary'>Add data</button>
                        </div>
                    </div>
                </form>

            </div>


            <Showemp />
        </>
    )
}

export default Addemp
