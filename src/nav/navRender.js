function GenerarNavBuscador() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <li class="left-links">
            <a href="/index.html" class="texto"><h2 class="tituloNav">CINETRON<h2></a>
        </li>
        <ul class="menu">
            <li class="left-links"> 
                <a href="#">PELICULAS</a>
                <ul class="submenu">
                    <li> <a href="/src/cartelera/cartelera.html">CARTELERA</a> </li>
                    <li> <a href="#">DESTACADAS</a> </li>
                    <li> <a href="#">PROXIMAMENTE</a> </li>
                </ul>
            </li>
            <li class="left-links">
                <a href="#">Funciones</a>
                <ul class="submenu">
                    <li>
                        <a href="#">HOY</a>
                    </li>
                    <li>
                        <a href="#">CARTELERA</a>
                    </li>
                    <li>
                        <a href="#">BUSCAR</a>
                    </li>
                </ul>
            </li>
            <li class="right-link">
                <a href="#">mis tickets</a> 
            </li>
            <li class="right-link">
                <div class="container">
                    <input type="text" placeholder="Buscar" class="inputNav" id='inputBusqued'>
                    <div class="botonn">
                        <i class="fa fa-search"></i>
                    </div>
                </div> 
            </li> 
        </ul>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNavBuscador();
contenedor.appendChild(barraNavegacion);