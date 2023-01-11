import React from 'react'
import { Link } from 'react-router-dom'

function Vacio() {
  return (
    <div className="col-10 col-md10">
                <div className="card vacio">
                    <div className="card-body">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <h1 className="card-title">Tu Carro está vacío</h1>
                        <p className="card-text">Tenemos miles de ofertas y oportunidades únicas, ¿te las vas a perder?</p>
                        <Link to="/">
                        <button className="btn btn-primary">Ver el catalogo</button>
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default Vacio