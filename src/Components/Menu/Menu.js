import { css } from '@emotion/css'
import {MenuItemP, CatalogoList, CatalogoListItem, ItemCatalogo, Link, MenuItem, Title, Container} from './Styles'

export function Menu() {
    return (
        <Container>
            <input type="checkbox" className={css`display: none;`} id="btn-menu" />
            <label className={css`display: none;
                font-size: 30px;
                padding: 10px;`} for="btn-menu"><i className="fa-solid fa-bars"></i></label>
            <Title><Link href="index.html">MiTienda</Link></Title>
            <MenuItem>
                <MenuItemP>
                    <b><Link href="index.html">Inicio</Link></b>
                </MenuItemP>
                <MenuItemP>
                    <b><Link href="nosotros.html">Nosotros</Link></b>
                </MenuItemP>
                <ItemCatalogo>
                    <p><b>Catalogo</b></p>
                    <CatalogoList>
                        <CatalogoListItem><Link href="hombres.html">Varones</Link></CatalogoListItem>
                        <CatalogoListItem><Link href="mujeres.html">Damas</Link></CatalogoListItem>
                        <CatalogoListItem><Link href="Niños.html">Infantes</Link></CatalogoListItem>
                    </CatalogoList>
                </ItemCatalogo>
                <MenuItemP>
                    <Link href="#contactanos"><b>Contactanos</b></Link>
                </MenuItemP>
                <MenuItemP>
                    <b><Link href="Login.html">Login</Link></b>
                </MenuItemP>
                <MenuItemP>
                    <b><Link href="carrito.html"><i className="fa-solid fa-cart-shopping"></i></Link></b>
                </MenuItemP>
            </MenuItem>
        </Container>
    )
}