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
import Myimage from './components/DisplayImage/Myimage';
import Example1 from './components/props/Example1';
import Example2 from './components/props/dividepoints/Example2';
import Imagegallery from './components/props/Imagegallery';
import Usecomponent from './components/Materials/Usecomponent';

function App() {
  return (
    <>
      {/* <h1 className="text-primary bg-warning">Hello World</h1> */}
      {/* <Display /> */}
      {/* <Display></Display> */}
      {/* <Inline /> */}
      {/* <Internal /> */}
      {/* <External /> */}
      {/* <Modulefile /> */}
      {/* <Var /> */}
      {/* <Classcompex /> */}
      {/* <Navbar /> */}
      {/* <Homepage /> */}
      {/* <Footer /> */}
      {/* <Myimage /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Imagegallery /> */}
      <Usecomponent />
    </>
  );
}

export default App;
