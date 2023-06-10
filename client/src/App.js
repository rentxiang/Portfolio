import logo from './logo.svg';
import './App.css';
// import '../src/ArrowNavigationStyles-master/css/component.css'
// import '../src/ArrowNavigationStyles-master/css/demo.css'
// import '../src/ArrowNavigationStyles-master/css/normalize.css'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"	

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Tract from './pages/Tract';
import MovieProx from './pages/Movieprox';
import Me from './pages/Me'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />

            <Route path="/movieprox" element={<MovieProx/>} />
            <Route path="/tract" element={<Tract/>} />
            <Route path="/me" element={<Me/>} />
            <Route path="/contact" element={<Contact/>} />


          </Routes>
    </div>
  );
}

export default App;
