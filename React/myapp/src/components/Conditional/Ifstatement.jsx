import React from 'react'
const Person = ({ name, city }) => {
    if (city === "Surat") {
        return <p>{name} ✔</p>
    } else {
        return <p>{name} ❌</p>
    }
}
const Ifstatement = () => {
    return (
        <>
            <Person name="Rohan" city="Surat" />
            <Person name="Kavita" city="Baroda" />
            <Person name="Gita" city="Surat" />
        </>
    )
}

export default Ifstatement
