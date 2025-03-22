import React, { useState } from 'react'

const Employee = () => {
    // employee data
    const empdata = [
        { id: 1, name: "John Doe", designation: "Software Engineer", salary: 75000 },
        { id: 2, name: "Jane Smith", designation: "Project Manager", salary: 90000 },
        { id: 3, name: "Alice Johnson", designation: "UI/UX Designer", salary: 70000 },
        { id: 4, name: "Bob Brown", designation: "DevOps Engineer", salary: 85000 },
        { id: 5, name: "Charlie Davis", designation: "QA Engineer", salary: 65000 },
        { id: 6, name: "Daniel Wilson", designation: "Backend Developer", salary: 80000 },
        { id: 7, name: "Emma White", designation: "Frontend Developer", salary: 78000 },
        { id: 8, name: "Franklin Harris", designation: "Business Analyst", salary: 72000 },
        { id: 9, name: "Grace Lewis", designation: "HR Manager", salary: 88000 },
        { id: 10, name: "Henry Walker", designation: "Product Owner", salary: 95000 },
    ]
    const [employee, setEmployee] = useState(empdata);
    const [search, setSearch] = useState('');
    const [filterdata, setFilterdata] = useState(employee);

    const handleSearch = (e) => {
        let val = e.target.value
        setSearch(val)
        if (val) {
            let result = employee.filter(items => items.salary == val)
            setFilterdata(result)
        } else {
            setFilterdata(employee)
        }
    }

    return (
        <>
            <div className="container py-2 card">
                <input type="search" className='form-control' placeholder='Search by salary' value={search} onChange={handleSearch} />

                <table className="table mt-5">
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
                            filterdata.length > 0 ?
                                filterdata.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.salary}</td>
                                    </tr>
                                ) :
                                <tr>
                                    <td colSpan={4}>
                                        <div className="alert alert-danger" role="alert">
                                            No Data Found
                                        </div>
                                    </td>
                                </tr>
                            // employee.map(item =>

                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Employee
