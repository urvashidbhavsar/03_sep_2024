import React from 'react'

const Fiterdata = () => {
    const des = ["Software Developer", "Worker", "Manager", "Peon", "DevOp", "HR", "AM"]

    const data = des.map(des =>
        <span key={des} className='p-3'>{des}</span>
    )

    const search = des.filter(fil => fil === "HR")
    const filterdata = search.map(newdata =>
        <span key={newdata} className='p-3'>{newdata}</span>
    )

    return (
        <>
            <h4>Employee Designations : </h4>
            <div> {data}</div>

            <h4>After Filter</h4>
            <div> {filterdata}</div>
        </>
    )
}

export default Fiterdata
