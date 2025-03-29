import React, { createContext, useContext, useState } from 'react'

const Createcontext = createContext()
const CompContext = () => {
    const [user, setUser] = useState("Hello World")
    return (
        <>
            <Createcontext.Provider value={user}>
                <Component5 />
            </Createcontext.Provider>
        </>
    )
}
function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(Createcontext)
    return (
        <>
            <h1>Component 5 {user}</h1>
        </>
    );
}

export default CompContext
