import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { query, onSnapshot, collection } from 'firebase/firestore'

const Todo = () => {
    const [showtodo, setShowtodo] = useState([])

    useEffect(() => {
        // fetch data from firestore and display here
        // query for fetch data
        const qry = query(collection(db, "mytodos"))
        // apply method for retrive data
        const datafetch = onSnapshot(qry, (mydata) => {
            // create array for store and push data
            let todoData = [];
            mydata.forEach((item) => {
                todoData.push({ ...item.data(), id: item.id })
            })
            setShowtodo(todoData)
        })
        return () => datafetch()
    }, [])

    return (
        <>
            <div className='container'>
                <table className='table w-50'>
                    <thead>
                        <tr>
                            <th>Todo List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showtodo.map(item =>
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>
                                        <button className='btn btn-info mx-1'>
                                            🖊
                                        </button>
                                        <button className='btn btn-danger mx-1'>
                                            ✖
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todo
