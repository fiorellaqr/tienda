import { css } from '@emotion/css'
import React from 'react'

function Modal() {

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="imgCard">
                <img id="imgCard" src="" alt=""/>
                </div>
              <div className="detalles">
                <h3 className="modeloCard">Blusa Mujer Manga Corta Nudo</h3>
                <h1 id="idCard" className={css`display: none`}>id</h1>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>( 250 )</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa aut sint, autem magnam
                  cupiditate
                </p>
                <select className="form-select form-select-sm" aria-label="Default select example" id="tallaCard">
                  <option>Seleccionar talla</option>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                </select>
                
                  <div className="col input input-group-sm col col-4 mb-2">
                  <input id="cantCard" type="number" min="1" className="form-control " placeholder="cantidad" />
                  </div>
              
                
                <span id="precioCard" className="precio">123</span>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Seguir comprando</button>
              <button type="submit" id="btnSubmit" data-bs-target="#exampleModalToggle2" className="btn btn-primary"> Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal