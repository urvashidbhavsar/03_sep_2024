import React from 'react'
import PropTypes from 'prop-types';

const Proptypeex = (props) => {
    return (
        <>
            <h1>Hello, {props.name}</h1>
        </>
    )
}
Proptypeex.propTypes = {
    name: PropTypes.string
}
export default Proptypeex
