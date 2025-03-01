import React from 'react';
import './App.css';
import External from './components/Applycss/External';
import Inline from './components/Applycss/Inline';
import Internal from './components/Applycss/Internal';
import Modulefile from './components/Applycss/Modulefile';
import Classcompex from './components/Classcompex';
import Var from './components/Expression/Var';
import Display from './Display';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* <Display /> */}
      {/* <Display></Display> */}
      {/* <Inline /> */}
      {/* <Internal /> */}
      {/* <External /> */}
      {/* <Modulefile /> */}
      {/* <Var /> */}
      {/* <Classcompex /> */}
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
