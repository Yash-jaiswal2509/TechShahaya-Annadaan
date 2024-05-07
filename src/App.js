import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Donate from './Pages/Inside-service-section/Donate';
import Receive from './Pages/Inside-service-section/Receive';




function App() {

  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/receive' element={<Receive />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
