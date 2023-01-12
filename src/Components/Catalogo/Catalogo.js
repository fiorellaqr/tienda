import { css } from '@emotion/css'
import {Container} from './Style'
import './catalogo.css';
import { CarritoState } from '../Context';
import Producto from '../Producto';


export function Catalogo() {
  const {carritoState:{productos}} = CarritoState();

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
