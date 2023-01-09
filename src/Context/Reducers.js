export const carritoReducer=(state, action)=>{
    switch(action.type){
        case "agregar":
            return {...state, carrito:""}
        case "quitar":
            return{...state,carrito:""}
        default:
            throw Error("Unknown action: " + action.type);
    }
}