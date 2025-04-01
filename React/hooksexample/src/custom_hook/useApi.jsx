import React, { useState, useEffect } from 'react'

const useApi = (url) => {
    const [data, setData] = useState([])

    const fetchdata = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
        // .then((data) => console.log(data))
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return [data]
}

export default useApi
