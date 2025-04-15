import React from 'react'
import Addtodo from './Mytodoapp/Addtodo'
import Todo from './Mytodoapp/Todo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './LoginAuth/Login'
import Register from './LoginAuth/Register'
import Home from './LoginAuth/Home'

const App = () => {
  return (
    <>
      {/* <Addtodo />
      <Todo /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
