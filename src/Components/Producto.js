import { CarritoState } from "./Context";

function Producto({prod}) {

  const { carritoState: {carrito}, dispatch } = CarritoState();

  console.log(carrito)

  return (
    <div id={prod.id} className="card col-12 col-sm-5 col-md-3 col-xl-2 producto">
          <img src={prod.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{prod.nombre}</p>
            <h5 className="card-title"><b>S/.{prod.precio.toFixed(2)}</b></h5>

            {carrito.some(produc=>produc.id===prod.id)
            ? ( 
              <button className="btn btn-danger" 
              onClick={()=>{
                dispatch({type:'quitar',payload:prod})
              }}>Remover del carrito</button>
            ) : ( 
              <button className="btn btn-outline-dark"
              onClick={()=>{
                dispatch({type:'agregar',payload:prod})
              }}>Añadir al Carrito</button>
            )}

            
          </div>
    </div>
  )
  
}

export default Producto;
