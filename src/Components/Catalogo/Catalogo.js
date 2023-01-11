import { css } from '@emotion/css'
import {Container} from './Style'
//import { useReducer } from 'react';
import './catalogo.css';
import { CarritoState } from '../Context';
import Producto from '../Producto';
//import Modal from '../Modal';
//import mujer1 from '';

export function Catalogo() {
  const {carritoState:{productos}} = CarritoState();
  console.log(productos);

    return(
      <>
    <div className={css`padding-top: 6rem` }>
    <Container>
      <div className='catalogo col-md-12'>
        {
          productos.map((prod)=>{
            return <Producto prod={prod} key={prod.id}></Producto>
          })
        }
      </div>
      </Container>
  </div>
  
  </>
  )
}

/* function productosReducer(productos, action){
  switch(action.type){
    case 'añadir':{
      return[
        ...productos,{
          id:action.id,
          nombre:action.text,
          codigo:action.text
        }]
    }
    default: {
      throw Error ('Unknown action: ' + action.type);
    }
  }
} */