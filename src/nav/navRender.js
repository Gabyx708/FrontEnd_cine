function GenerarNavPrincipal() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    
    // Define el contenido de la barra de navegación
    barraNav.innerHTML = `
        <li class="left-links">
            <h2 class="tituloNav">CINETRON<h2> 
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
            <li class="left-links">
                <a href="#" >Relleno</a>
                <ul class="submenu">
                    <li>
                        <a href="#">Todas</a>
                    </li>
                    <li>
                        <a href="#">Más vistas</a>
                    </li>
                    <li>
                        <a href="#">Por genero</a>
                    </li>
                </ul>
            </li>
            <li class="right-link">
                <a href="#">mis tickets</a> 
            </li>
            <li class="right-link">
                <div class="container">
                    <input type="text" placeholder="Buscar">
                    <div class="btn">
                        <i class="fa fa-search"></i>
                    </div>
                </div> 
            </li> 
        </ul>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNavPrincipal();
contenedor.appendChild(barraNavegacion);