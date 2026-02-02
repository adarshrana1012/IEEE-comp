import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Team from "./pages/Team";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/events' element={<Committee/>}></Route>
      <Route path='/Team' element={<Team/>}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
