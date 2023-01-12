import { css } from '@emotion/css'
import {useIp} from './useIp'

export function Footer() {

    /* CUSTOM HOOKS */
    const apip  = useIp();

    return (
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
                                    color: rgb(132, 132, 132);`} ><div className="fa-brands fa-facebook"></div></i>
                    <i className={css`width: 100px;
                                    font-size: 50px;
                                    text-align: center;
                                    margin-top: 10%;
                                    margin-left: 10%;
                                    color: rgb(132, 132, 132);`} ><div className="fa-brands fa-instagram"></div></i>
                    <i className={css`width: 100px;
                                    font-size: 50px;
                                    text-align: center;
                                    margin-top: 10%;
                                    margin-left: 10%;
                                    color: rgb(132, 132, 132);`} ><div className="fa-brands fa-tiktok"></div></i>
                </div>
                <div className={css`width: 26%;
                                    margin: 3% 1%;`}>
                    <h2>Ubicanos</h2><br></br><hr className={css`width: 85%;
                                                                border: 0;
                                                                border-bottom: 1px dotted rgba(255, 255, 255, 0.3);`}></hr><br></br>
                    <p>
                        {apip}
                    </p>
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
    )
}