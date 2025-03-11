import React from 'react'

const EmployeeData = () => {
    const employees = [
        { id: 1, name: "John Doe", designation: "Software Engineer", salary: 75000 },
        { id: 2, name: "Jane Smith", designation: "Project Manager", salary: 90000 },
        { id: 3, name: "Mike Johnson", designation: "UX Designer", salary: 70000 },
        { id: 4, name: "Emily Davis", designation: "QA Engineer", salary: 65000 },
        { id: 5, name: "Robert Brown", designation: "DevOps Engineer", salary: 80000 }
    ];

    let filterdata = employees.filter(sal => sal.salary >= 80000)

    return (
        <>
            <div className="container">
                <h5 className='bg-success p-3 text-white'>Employee Data</h5>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(data =>
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.salary}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>


                <h5 className='bg-success p-3 text-white'>Filter By salary</h5>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterdata.map(data =>
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.salary}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeData
