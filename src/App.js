import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import About from './components/about';
import Estructura from './components/estructura';
import Directorio from './components/directorio';
import MisionVision from './components/misionVision';

import Home from './components/home';
import NavbarExample from './layouts/navbar';
import Footer from './layouts/footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


//import Apptwt from './layouts/twitter';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<NavbarExample/>}>
          <Route index element = {<Home/>}/>
          <Route path='about' element = {<About/>}/>
          <Route path='estructura' element = {<Estructura/>}/>
          <Route path='directorio' element = {<Directorio/>}/>
          <Route path='misionvision' element = {<MisionVision/>}/>
          <Route path='contact' element = {<Contact/>}/>
          <Route path='twitter' element = {<About/>}/>
          <Route path='*' element = {<Navigate replace to="/"/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      <div>
        <Footer/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
