import React, { useEffect, useState } from 'react'

const Showdata = () => {
    const [getdata, setGetdata] = useState([])

    const fetchdata = () => {
        let data = JSON.parse(localStorage.getItem("empdata"))
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
                                <td>{item.salary}</td>
                                <td>{item.doj}</td>
                                <td>
                                    <img src={item.profile} style={setimg} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Showdata
