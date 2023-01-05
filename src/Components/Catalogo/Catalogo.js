import { css } from '@emotion/css'
import {Container} from './Style'
//import mujer1 from '../../imagenes/mujer1'

export function Catalogo() {
    return(
    <div className={css`padding-top: 10%; height:300px` }>
    <Container>
    <div className="catalogo col-md-10" id="catalogo">
        <div id="product1" className="card col-sm-5 col-md-3 producto">
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Blusa Mujer Manga Corta Nudo</p>
            <h5 className="card-title"><b>S/.25.00</b></h5>
            <button className="btn btn-light" id="button1"
              onclick="obtenerId('product1','vendido1','button1')">Comprar</button>
          </div>
        </div>

        <div id="product2" className="card col-sm-5 col-md-3 producto">
          <img src="img/mujer2.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Blusa Mujer Sin Manga Patty</p>
            <h5 className="card-title"><b>S/.25.00</b></h5>
            <button className="btn btn-light" id="button2"
              onclick="obtenerId('product2','vendido2','button2')">Comprar</button>
          </div>
        </div>
      </div>    
      </Container>
    {/* <div className="content row">
      <div class="filtro col-md-2">
        <p><b>Categoria</b></p>
        <li><a href="mujeres.html">Mujeres</a></li>
        <li><a href="hombres.html">Hombres</a></li>
        <li><a href="Niños.html">Niños</a></li>
      </div>
      <div class="catalogo col-md-10" id="catalogo">
        <div id="product1" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer1.webp" class="card-img-top" alt="..." />
          <img id="vendido1" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Blusa Mujer Manga Corta Nudo</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button1"
              onclick="obtenerId('product1','vendido1','button1')">Comprar</button>
          </div>
        </div>

        <div id="product2" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer2.webp" class="card-img-top" alt="..." />
          <img id="vendido2" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Blusa Mujer Sin Manga Patty</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button2"
              onclick="obtenerId('product2','vendido2','button2')">Comprar</button>
          </div>
        </div>

        <div id="product3" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer 3.webp" class="card-img-top" alt="..." />
          <img id="vendido3" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Vestido Mujer Lazo</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button3"
              onclick="obtenerId('product3','vendido3','button3')">Comprar</button>
          </div>
        </div>

        <div id="product4" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer4.webp" class="card-img-top" alt="..." />
          <img id="vendido4" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Enterizo Largo Sin Mangas</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button4"
              onclick="obtenerId('product4','vendido4','button4')">Comprar</button>
          </div>
        </div>

        <div id="product5" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer5.webp" class="card-img-top" alt="..." />
          <img id="vendido5" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Enterizo Jumper Mujer</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button5"
              onclick="obtenerId('product5','vendido5','button5')">Comprar</button>
          </div>
        </div>

        <div id="product6" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer6.webp" class="card-img-top" alt="..." />
          <img id="vendido6" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Pantalón Mujer Lazo</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button6"
              onclick="obtenerId('product6','vendido6','button6')">Comprar</button>
          </div>
        </div>
        <div id="product7" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer7.webp" class="card-img-top" alt="..." />
          <img id="vendido7" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Jean Mujer Sinpre Rasgado</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button7"
              onclick="obtenerId('product7','vendido7','button7')">Comprar</button>
          </div>
        </div>


        <div id="product8" class="card col-sm-5 col-md-3 producto">
          <img src="img/mujer8.webp" class="card-img-top" alt="..." />
          <img id="vendido8" src="img/Vendido.png" alt="" />
          <div class="card-body">
            <p class="card-text">Jean Mujer Black</p>
            <h5 class="card-title"><b>S/.25.00</b></h5>
            <button class="btn btn-light" id="button8"
              onclick="obtenerId('product8','vendido8','button8')">Comprar</button>
          </div>
        </div>

      </div>
    </div> */}
  </div>
  )
}