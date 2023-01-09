import {createContext, useReducer, useContext} from "react";
import { carritoReducer } from "./Reducers";

const  Carrito = createContext();

const Context =({children}) =>{
    const productos = [
        {id: 1, nombre: "Blusa Mujer Manga Corta Nudo", precio: 50, stock: 10, codigo: "P001", categoria: "mujer", img:"../imagenes/mujer1.webp"},
        {id: 2, nombre: "Blusa Mujer Sin Manga Patty", precio: 55, stock: 5, codigo: "P002", categoria: "mujer", img:"../imagenes/mujer2.webp"},
        {id: 3, nombre: "Vestido Mujer Lazo", precio: 52, stock: 8, codigo: "P003", categoria: "mujer", img:"mujer3.webp"},
        {id: 4, nombre: "Enterizo Largo Sin Mangas", precio: 52, stock: 8, codigo: "P004", categoria: "mujer", img:"mujer4.webp"},
        {id: 5, nombre: "Enterizo Jumper Mujer", precio: 52, stock: 8, codigo: "P005", categoria: "mujer", img:"mujer5.webp"},
        {id: 6, nombre: "Pantalón Mujer Lazo", precio: 52, stock: 8, codigo: "P006", categoria: "mujer", img:"mujer6.webp"},
        {id: 7, nombre: "Jean Mujer Sinpre Rasgado", precio: 52, stock: 8, codigo: "P007", categoria: "mujer", img:"mujer7.webp"},
        {id: 8, nombre: "Jean Mujer Black", precio: 52, stock: 8, codigo: "P008", categoria: "mujer", img:"mujer8.webp"},
        {id: 9, nombre: "Camisa Lorenzini", precio: 52, stock: 8, codigo: "P009", categoria: "mujer", img:"mujer8.webp"},
        {id: 10, nombre: "Camisa Nautica", precio: 52, stock: 8, codigo: "P0010", categoria: "mujer", img:"mujer8.webp"},
        {id: 11, nombre: "Camisa Donatelli", precio: 52, stock: 8, codigo: "P0011", categoria: "mujer", img:"mujer3.webp"},
        {id: 12, nombre: "Chompa Hypnotic", precio: 52, stock: 8, codigo: "P0012", categoria: "mujer", img:"mujer3.webp"},
        {id: 13, nombre: "Chompa Malabar", precio: 52, stock: 8, codigo: "P0013", categoria: "mujer", img:"mujer3.webp"},
        {id: 14, nombre: "Chompa Index", precio: 52, stock: 8, codigo: "P0014", categoria: "mujer", img:"mujer3.webp"},
        {id: 15, nombre: "Pantalon Drill", precio: 52, stock: 8, codigo: "P0015", categoria: "mujer", img:"mujer3.webp"},
        {id: 16, nombre: "Pantalon DKVK", precio: 52, stock: 8, codigo: "P0016", categoria: "mujer", img:"mujer3.webp"},
    ]

    const [carritoState, dispatch] = useReducer(carritoReducer,{
        productos: productos,
        carrito:[]
    });

    return <Carrito.Provider value={{carritoState, dispatch}}>{children}</Carrito.Provider>;
};
export default Context;


export const CarritoState=()=>{
    return useContext(Carrito);
}
