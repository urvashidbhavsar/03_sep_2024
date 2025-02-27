import './App.css';
import External from './components/Applycss/External';
import Inline from './components/Applycss/Inline';
import Internal from './components/Applycss/Internal';
import Modulefile from './components/Applycss/Modulefile';
import Display from './Display';

function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      {/* <Display /> */}
      {/* <Display></Display> */}
      <Inline />
      <Internal />
      <External />
      <Modulefile />
    </div>
  );
}

export default App;
