function GenerarNavBuscador() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <li class="left-links">
            <a href="/index.html" class="texto"><h2 class="tituloNav">CINETRON<h2></a>
        </li>
        <ul class="menu">
            <li class="left-links"> 
                <a href="/src/cartelera/cartelera.html">CARTELERA</a> </li>
            </li>
            <li class="left-links">
                <a href="src/cartelera/cartelera.html?fecha=hoy">HOY</a>
            </li>
            <li class="right-link">
                <div class="container">
                    <input type="text" placeholder="Buscar" class="input-nav" id='inputBusqued'>
                    <div class="boton-input">
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