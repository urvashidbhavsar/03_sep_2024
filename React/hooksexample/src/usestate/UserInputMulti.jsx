import React, { useState } from 'react'

const UserInputMulti = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        num: "",
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container">
                <div>
                    <input type="text" placeholder='Name...' value={input.name} name='name' onChange={handleChange} />
                </div>
                <div>
                    <input type="text" placeholder='Email...' value={input.email} name='email' onChange={handleChange} />
                </div>
                <div>
                    <input type="text" placeholder='MobileNo...' value={input.num} name='num' onChange={handleChange} />
                </div>

                <p>Name : {input.name}</p>
                <p>Email : {input.email}</p>
                <p>Mobile Number : {input.num}</p>
            </div>
        </>
    )
}

export default UserInputMulti
