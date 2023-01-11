export const carritoReducer=(state, action)=>{
    switch(action.type){
        case "agregar":
            return {...state, carrito:[...state.carrito, {...action.payload, cantidad:1}]}
        case "quitar":
            return{...state,carrito:state.carrito.filter((carro)=>carro.id !== action.payload.id)}
        default:
            throw Error("Unknown action: " + action.type);
    }
}