import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Nav from './Nav'

function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}

        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Home />} path='/Home'></Route>
          <Route element={<About />} path='/About'></Route>
          <Route element={<Contact />} path='/Contact'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
