//import { CarritoState } from '../Context/Context';
//import img from '../imagenes/mujer1.webp'

import { useState } from "react";
import Modal from "./Modal";

function Producto({prod}) {

  const [ocultar, setOcultar] = useState(true);
  function mostrar(){
    setOcultar(false)
  }

  

  return (
    <>
    <div id={prod.id} className="card col-12 col-sm-5 col-md-3 col-xl-2 producto">
          <img src={prod.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{prod.nombre}</p>
            <h5 className="card-title"><b>S/.{prod.precio.toFixed(2)}</b></h5>
            <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={mostrar} >Comprar</button>
          </div>
    </div>
    { ocultar ? null : <Modal/> }
    </>

  )
  
}

export default Producto;
