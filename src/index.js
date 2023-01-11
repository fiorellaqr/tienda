import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { Menu } from './Components/Menu/Menu';
import { Footer } from './Components/Footer';
import { Catalogo } from './Components/Catalogo/Catalogo';
import reportWebVitals from './reportWebVitals';
import Context from './Components/Context';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from './Components/Carrito';
//import App from './App';


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
