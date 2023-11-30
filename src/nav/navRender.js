import GenerarPeliculas from './GenerarPeliculasBusquedaNav.js';
function GenerarNavBuscador() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <li class="left-links">
            <a href="/index.html" class="texto"><h2 class="tituloNav">CINETRON</h2></a>
        </li>
        <ul class="menu">
            <li class="left-links menu-opciones"> 
                <a href="../../src/cartelera/cartelera.html">CARTELERA</a> </li>
            </li>
            <li class="left-links menu-opciones">
                <a href="../../src/cartelera/cartelera.html?fecha=hoy">HOY</a>
            </li>
            <li class="right-link">
                <div class="container">
                    <input type="text" placeholder="¿Qué película querés ver?" class="input-nav" id='inputBusqued'>
                    <div class="boton-input">
                        <i class="fa fa-search"></i>
                    </div>
                    <ul id='peliculas-resultado'>
                    </ul>
                </div> 
            </li> 
        </ul>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNavBuscador();
contenedor.appendChild(barraNavegacion);


const contenedorHover = document.querySelector('.container');
const listaPeliculas = document.getElementById('peliculas-resultado');
const inputBusqueda = document.getElementById('inputBusqued');

inputBusqueda.addEventListener('input', function() {
  if (this.value.trim().length > 0) {
    listaPeliculas.style.display = 'block';
    inputBusqueda.classList.add('input-nav-lista-visible');
    GenerarPeliculas.Get('peliculas-resultado',inputBusqueda.value);
    
  } else {
    listaPeliculas.style.display = 'none';
    inputBusqueda.classList.remove('input-nav-lista-visible');
  }
});

contenedorHover.addEventListener('mouseenter', function() {
  if (inputBusqueda.value.trim().length > 0) {
    listaPeliculas.style.display = 'block';
    inputBusqueda.classList.add('input-nav-lista-visible');
  }
});

contenedorHover.addEventListener('mouseleave', function() {
  listaPeliculas.style.display = 'none';
  inputBusqueda.classList.remove('input-nav-lista-visible');
  inputBusqueda.value = '';
});
