import { css } from '@emotion/css'
import {MenuItemP, CatalogoList, CatalogoListItem, ItemCatalogo, Enlace, MenuItem, Title, Container} from './Styles'
import { CarritoState } from "../Context";

export function Menu() {
const {carritoState: {carrito} } = CarritoState();

    return (
        <Container>
            <input type="checkbox" className={css`display: none;`} id="btn-menu" />
            <label className={css`display: none;
                font-size: 30px;
                padding: 10px;`} htmlFor="btn-menu"><i className="fa-solid fa-bars"></i></label>
            <Title><Enlace href="index.html">MiTienda</Enlace></Title>
            <MenuItem>
                <MenuItemP>
                    <b><Enlace href="index.html">Inicio</Enlace></b>
                </MenuItemP>
                <MenuItemP>
                    <b><Enlace href="nosotros.html">Nosotros</Enlace></b>
                </MenuItemP>
                <ItemCatalogo>
                    <p><b>Catalogo</b></p>
                    <CatalogoList>
                        <CatalogoListItem><Enlace href="hombres.html">Varones</Enlace></CatalogoListItem>
                        <CatalogoListItem><Enlace href="mujeres.html">Damas</Enlace></CatalogoListItem>
                        <CatalogoListItem><Enlace href="Niños.html">Infantes</Enlace></CatalogoListItem>
                    </CatalogoList>
                </ItemCatalogo>
                <MenuItemP>
                    <Enlace href="#contactanos"><b>Contactanos</b></Enlace>
                </MenuItemP>
                <MenuItemP>
                    <b><Enlace href="Login.html">Login</Enlace></b>
                </MenuItemP>
                <MenuItemP>
                {/* <Link to="/ListarCarrito"></Link> */}
                    <b><i className="fa-solid fa-cart-shopping"></i>
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                    {carrito.length}</span></b>
                </MenuItemP>
            </MenuItem>
        </Container>
    )
}