import React, { useState } from 'react'
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const Addtodo = () => {
    const [todo, setTodo] = useState("")

    const handleSubmit = async (e) => {
        // addDoc = used to add data on firestore
        // collection = table
        // mytodos = name of table
        // title = is a one column in table
        e.preventDefault()
        if (todo != "") {
            await addDoc(collection(db, 'mytodos'), {
                title: todo,
            });
            alert("data added successfully!!!!")
            setTodo("")
        }
    }

    return (
        <>
            <div className="container py-5">
                <form className='w-50' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <input type="text" name="" id="" placeholder='Enter todos...' className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} />
                        </div>
                        <div className="col-4">
                            <button className='btn btn-primary' type='submit'>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addtodo
