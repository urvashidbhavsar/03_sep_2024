import React, { useEffect, useState } from 'react'
import useApi from './useApi'

const callapi = () => {
    const [data] = useApi("https://fakestoreapiserver.reactbd.com/products")
    console.log(data)

    return (
        <>
            {
                data.map(items =>
                    <div key={items._id}>
                        <p>{items.title}</p>
                    </div>
                )
            }
        </>
    )
}

export default callapi
