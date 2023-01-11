import { css } from '@emotion/css'
import {MenuItemP, CatalogoList, CatalogoListItem, ItemCatalogo, Enlace, MenuItem, Title, Container} from './Styles'
import { CarritoState } from "../Context";
import { Link } from 'react-router-dom';

export function Menu() {
const {carritoState: {carrito} } = CarritoState();

    return (
        <Container>
            <input type="checkbox" className={css`display: none;`} id="btn-menu" />
            <label className={css`display: none;
                font-size: 30px;
                padding: 10px;`} htmlFor="btn-menu"><i className="fa-solid fa-bars"></i></label>
            <Title>
                {<Link to="/">MiTienda</Link>}
            </Title>
            <MenuItem>
                <MenuItemP>
                {<Link to="/"><b>Inicio</b></Link>}
                </MenuItemP>
                <MenuItemP>
                    <b><Enlace>Nosotros</Enlace></b>
                </MenuItemP>
                <ItemCatalogo>
                {<Link to="/"><b><p><b>Catalogo</b></p>
                    <CatalogoList>
                        <CatalogoListItem><Enlace>Varones</Enlace></CatalogoListItem>
                        <CatalogoListItem><Enlace>Damas</Enlace></CatalogoListItem>
                        <CatalogoListItem><Enlace>Infantes</Enlace></CatalogoListItem>
                    </CatalogoList></b>
                </Link>}
                    
                </ItemCatalogo>
                <MenuItemP>
                    <Enlace ><b>Contactanos</b></Enlace>
                </MenuItemP>
                <MenuItemP>
                    <b><Enlace >Login</Enlace></b>
                </MenuItemP>
                <MenuItemP>
                {<Link to="/carrito">
                    <b><i className="fa-solid fa-cart-shopping"></i>
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                    {carrito.length}</span></b>
                    </Link>}
                </MenuItemP>
            </MenuItem>
        </Container>
    )
}