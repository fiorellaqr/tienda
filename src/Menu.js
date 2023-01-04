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
                    <div id='item-catalogo' className={css`padding: 2% 2% 0 2%;
    margin-right: 3%;`}>
                        <p><b>Catalogo</b></p>
                        <ul  className={css`background-color: white;
                            list-style-type: none;
                            position: absolute;
                            margin-top: 0.4%;
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
            
            <div className={css`height: 500px`}></div>

            <footer id="contactanos" className={css`background-color: #141414fc;
                                                color: white;
                                                display: flex;
                                                flex-direction: column;
                                                width: 100%;
                                                height: 100%;`}>
                <div className={css`width: 100%;
                                display: flex;
                                justify-content: center;`} id="claro_oscuro6">
                    <div className={css`width: 26%;
                                    margin: 3% 1%;`}>
                        <h2>Contactanos</h2><br></br><hr className={css`width: 85%;
                                                                border: 0;
                                                                border-bottom: 1px dotted rgba(255, 255, 255, 0.3);`}></hr><br></br><br></br>
                        <p className={css`margin-right: 14%;
                                    color: rgb(132, 132, 132);`}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    </div>
                    <div className={css`width: 26%;
                                    margin: 3% 1%;`}>
                        <h2>Redes Sociales</h2><br></br><hr className={css`width: 85%;
                                                                    border: 0;
                                                                    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);`}></hr><br></br><br></br>
                        <p className={css`margin-right: 14%;
                                    color: rgb(132, 132, 132);`}>Encuentranos en nuestras redes:</p>
                        <i className={css`width: 100px;
                                    font-size: 50px;
                                    text-align: center;
                                    margin-top: 10%;
                                    margin-left: 10%;
                                    color: rgb(132, 132, 132);`} ><div class="fa-brands fa-facebook"></div></i>
                        <i className={css`width: 100px;
                                    font-size: 50px;
                                    text-align: center;
                                    margin-top: 10%;
                                    margin-left: 10%;
                                    color: rgb(132, 132, 132);`} ><div class="fa-brands fa-instagram"></div></i>
                        <i className={css`width: 100px;
                                    font-size: 50px;
                                    text-align: center;
                                    margin-top: 10%;
                                    margin-left: 10%;
                                    color: rgb(132, 132, 132);`} ><div class="fa-brands fa-tiktok"></div></i>
                    </div>
                    <div className={css`width: 26%;
                                    margin: 3% 1%;`}>
                        <h2>Ubicanos</h2><br></br><hr className={css`width: 85%;
                                                                border: 0;
                                                                border-bottom: 1px dotted rgba(255, 255, 255, 0.3);`}></hr><br></br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4163.768727653904!2d-77.03714204773314!3d-12.057285241833123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c66039e27f%3A0xf87b9752d3eeb99c!2sGaleria%20COMPUPLAZA!5e0!3m2!1ses-419!2spe!4v1666428705323!5m2!1ses-419!2spe" className={css`width: 85%;
                                                                                                                                                                                                                                                                                                                                            height: 300px;
                                                                                                                                                                                                                                                                                                                                            margin: 2%;
                                                                                                                                                                                                                                                                                                                                            border:0;`} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className={css`width: 83%;
                                    margin: auto;
                                    
                                    text-align: center;
                                    padding: 2% 0;
                                    color: rgb(132, 132, 132);`} id="claro_oscuro7"><hr className={css`width: 100%;`}></hr>
                    <br></br><p>© 2022 Goggles. All Rights Reserved | Design by W3layouts</p>
                </div>
            </footer>
        </div>
    )
}