import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrito from './Components/Carrito'
import { Catalogo } from './Components/Catalogo/Catalogo'
import Context from './Components/Context'
import { Footer } from './Components/Footer'
import { Menu } from './Components/Menu/Menu'

function App() {

    const [query, setQuery] = useState("react js");
  const [libros, setLibros] = useState([]);
    useEffect(() => {
        function fetchLibros() {
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then((response) => response.json())
            .then((data) => setLibros(data.items));
        }
        fetchLibros();
      }, [query]);
    return (
        <></>
    )
}

export default App