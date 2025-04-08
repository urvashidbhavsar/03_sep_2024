import React, { useEffect, useState } from 'react'

const Showemp = () => {
    const [getdata, setGetdata] = useState([])

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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showemp
