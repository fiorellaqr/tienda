import { css } from '@emotion/css'

export function Menu() {
    return (
        <div className="fijar">
            <div className={css`display: flex;
                    flex-direction: row;
                    margin-bottom: 5%;
                    box-shadow: 0 4px 8px 0 rgba(151, 151, 151, 0.219);
                    background-color: white;
                    width: 100%;
                    position: fixed;
                    z-index: 10;`}>
                <input type="checkbox" className={css`display: none;`} id="btn-menu" />
                <label className={css`display: none;
                    font-size: 30px;
                    padding: 10px;`} for="btn-menu"><i className="fa-solid fa-bars"></i></label>
                <h1 className={css`width: 25%;
                    text-align: center;
                    margin: auto;`}><a href="index.html">MiTienda</a></h1>
                <div id="menu-item" className={css`display: flex;
                    flex-direction: row;
                    justify-content: right;
                    margin-right: 2%;
                    width: 75%;`}>
                    <p>
                        <b><a href="index.html">Inicio</a></b>
                    </p>
                    <p>
                        <b><a href="nosotros.html">Nosotros</a></b>
                    </p>
                    <div className="item-catalogo">
                        <p><b>Catalogo</b></p>
                        <ul className={css`background-color: white;
                            list-style-type: none;
                            position: absolute;
                            width: 12%;
                            margin-left: -1.5%;
                            opacity: 0;
                            border: 1px solid rgba(211, 211, 211, 0.493);
                            padding: 1%;
                            box-shadow: 0 4px 15px 5px  rgba(151, 151, 151, 0.219);`}>
                            <li><a href="hombres.html">Varones</a></li>
                            <li><a href="mujeres.html">Damas</a></li>
                            <li><a href="Niños.html">Infantes</a></li>
                        </ul>
                    </div>
                    <p>
                        <a href="#contactanos"><b>Contactanos</b></a>
                    </p>
                    <p>
                        <b><a href="Login.html">Login</a></b>
                    </p>
                    <p>
                        <b><a href="carrito.html"><i className="fa-solid fa-cart-shopping"></i></a></b>
                    </p>
                </div>
            </div>
        </div>
    )
}