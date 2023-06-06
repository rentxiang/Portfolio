import logo from './logo.svg';
import './App.css';
import '../src/ArrowNavigationStyles-master/css/component.css'
import '../src/ArrowNavigationStyles-master/css/demo.css'
import '../src/ArrowNavigationStyles-master/css/normalize.css'

import { Route, Routes } from "react-router-dom"
import About from "./pages/About"	

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <About/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tianxiang Ren
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
