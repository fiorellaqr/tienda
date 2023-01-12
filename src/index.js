import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Menu } from './Components/Menu/Menu';
import { Footer } from './Components/Footer';
import { Catalogo } from './Components/Catalogo/Catalogo';
import Context from './Components/Context';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from './Components/Carrito';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Context>
        <Menu />
        <Routes>
          <Route path='/' exact element={<Catalogo />}></Route>
          <Route path='/carrito' element={<Carrito />}></Route>
        </Routes>
        <Footer />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
