import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { query, onSnapshot, collection, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const Todo = () => {
    // fetch data
    const [showtodo, setShowtodo] = useState([])
    // permission
    const [editId, setEditId] = useState(false)
    // update
    const [newtitle, setNewtitle] = useState("")

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

    // logic for fetch 
    const UpdateData = async (id, title) => {
        await updateDoc(doc(db, "mytodos", id), { title: title })
    }

    const DeleteData = async (id) => {
        if (confirm("Are you sure want to delete this data?")) {
            await deleteDoc(doc(db, "mytodos", id))
        }
    }
    const saveData = (id) => {
        UpdateData(id, newtitle)
        console.log(newtitle)
        setEditId(false)
        setNewtitle("")
    }

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
                                    <td>
                                        {
                                            editId === item.id ?
                                                <input type="text" className='form-control' value={newtitle} onChange={(e) => setNewtitle(e.target.value)} />
                                                :
                                                item.title
                                        }
                                    </td>
                                    <td>
                                        {
                                            editId === item.id ?
                                                <button className='btn btn-success mx-1' onClick={() => saveData(item.id)}>
                                                    ✔
                                                </button>
                                                :
                                                <>
                                                    <button className='btn btn-info mx-1' onClick={() => { setEditId(item.id), setNewtitle(item.title) }}>
                                                        🖊
                                                    </button>
                                                    <button className='btn btn-danger mx-1' onClick={() => DeleteData(item.id)}>
                                                        ✖
                                                    </button>
                                                </>
                                        }

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
