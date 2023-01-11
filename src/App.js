import "./App.css";
import React, { useState, useEffect } from "react";

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
    <div>
      <h1>Escribe el libro que estas buscando</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {libros?.map((libro) => (
          <li key={libro.id}> {libro.volumeInfo.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

