import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProtectRoutes from './services/ProtectRoutes'
import Adminlogin from './Pages/Employee/Adminlogin'
import Employee from './Pages/Employee/Employee'

const App = () => {
  return (
    <>
      {/* <Login />
      <Register/> */}

      {/* old code  */}
      {/* <Route element={<Login />} path='/'></Route>
      <Route element={<Login />} path='/Login'></Route>
      <Route element={<Register />} path='/Register'></Route>
      <Route element={<ProtectRoutes />} path='/Home'>
        <Route element={<Home />} path='/Home'></Route>
      </Route> */}

      <Router>
        <Routes>
          {/* for app page */}
          <Route element={<Adminlogin />} path='/'></Route>
          <Route element={<Adminlogin />} path='/Login'></Route>
          <Route element={<ProtectRoutes />} path='/Home'>
            <Route element={<Home />} path='/Home'></Route>
          </Route>
          <Route element={<ProtectRoutes />} path='/Employee'>
            <Route element={<Employee />} path='/Employee'></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
