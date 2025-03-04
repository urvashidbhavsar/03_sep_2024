import React from 'react'

const Myfunc = (props) => {
    return <h1>We Learn Subject {props.subname} at {props.time}
    </h1>
}
// props passed as parameter used as attribute
const Example1 = () => {
    return (
        <>
            <Myfunc subname="Javascript" time="10.00 AM" />
            <Myfunc subname="Php" time="12.00 PM" />
            <Myfunc subname="Java" time="3.00 PM" />
        </>
    )
}

export default Example1
