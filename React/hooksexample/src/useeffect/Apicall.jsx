import React, { useEffect, useState } from 'react'

const Apicall = () => {
    const [getdata, setGetdata] = useState([])
    // const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            await fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setGetdata(data))
            // .then(data => console.log(data))
        } catch (e) {
            console.log(e)
        }
    }

    const imgset = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // () ? : 
                            getdata.length > 0 ?
                                getdata.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <img src={item.image} style={imgset} />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.rating.rate} <br />
                                            ({item.rating.count})
                                        </td>
                                    </tr>
                                )
                                :
                                <tr>
                                    <td colSpan={7}>
                                        Data Not found
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Apicall
