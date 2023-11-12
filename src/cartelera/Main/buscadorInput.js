function GenerarbuscadorCartelera() {
    const busc = document.createElement('div');
    busc.className = 'buscador';
    busc.innerHTML = `
        <input type="text" id="inputBusqueda" placeholder="Buscar película" class="buscador-titulo">
        <div class="fecha-busqueda">
            <i class="fa-solid fa-calendar-days separador"></i>
            <p class="separador texto-calendario">Mie, 24 de Sep</p>
            <i class="fa-solid fa-angle-left separador"></i>
            <i class="fa-solid fa-angle-right separador"></i>
        </div>
    `;

    return busc;
}

const contenedor = document.getElementById('buscadorInput');
const buscadorCartelera = GenerarbuscadorCartelera();
contenedor.appendChild(buscadorCartelera);
