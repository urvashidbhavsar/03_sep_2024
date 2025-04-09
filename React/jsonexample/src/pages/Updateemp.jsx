import React from 'react'
import List from './List'

const Updateemp = ({ edit, setEdit, fetchdata }) => {
    // edit for update state
    // setedit for setupdate which is func to change state
    // fetchdata for fetchapidata which is reload data
    const des = List()
    const handleChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    const updateData = async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:3000/employee/${edit.id}`, {
            method: "PUT",
            body: JSON.stringify(edit)
        })
        alert("data updated!!!")
        fetchdata()
    }
    return (
        <>
            <div className="modal fade" id="updatemodal" tabIndex="-1" aria-labelledby="updatemodalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updatemodalLabel">Update Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-2">
                                    <div className="col-12">
                                        <h5>ID: {edit.id}</h5>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="empname" placeholder='Full name' className='form-control' onChange={handleChange} value={edit.empname} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" name="salary" placeholder='Salary' className='form-control' onChange={handleChange} value={edit.salary} />
                                    </div>
                                    <div className="col-12">
                                        <select name="designation" className='form-select' onChange={handleChange} value={edit.designation}>
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
                                    <div className="col-12">
                                        <input type="text" name="profile" className='form-control' placeholder='Image URL' onChange={handleChange} value={edit.profile} />
                                    </div>
                                    <div className="col-12">
                                        <button className='btn btn-primary' onClick={updateData}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updateemp
