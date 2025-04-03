import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProtectRoutes from './services/ProtectRoutes'

const App = () => {
  return (
    <>
      {/* <Login />
      <Register/> */}
      <Router>
        <Routes>
          {/* for app page */}
          <Route element={<Login />} path='/'></Route>
          <Route element={<Login />} path='/Login'></Route>
          <Route element={<Register />} path='/Register'></Route>
          <Route element={<ProtectRoutes />} path='/Home'>
            <Route element={<Home />} path='/Home'></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
