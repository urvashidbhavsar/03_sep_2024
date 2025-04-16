import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'

const Home = () => {
    const navigate = useNavigate()
    const [getuser, setGetuser] = useState("")

    const fetchuser = async () => {
        const user = auth.currentUser;
        if (user) {
            let userexist = await getDoc(doc(db, "regusers", user.uid))
            setGetuser(userexist.data())
        }
    }

    useEffect(() => {
        fetchuser();
    })

    const logout = async () => {
        await auth.signOut()
        navigate("/")
    }

    return (
        <>
            <div className='w-50 m-auto shadow p-5 mt-5 text-center'>
                {
                    getuser ?
                        <h1>Welcome, {getuser.fullname}!!!!</h1>
                        :
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                }

                <div className='my-2'>
                    <button onClick={logout} className='btn btn-danger'>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Home
