function GenerarbuscadorCartelera() {
    const busc = document.createElement('div');
    busc.className = 'buscador';
    busc.innerHTML = `
    <input type="text" id="inputBusqueda" placeholder="Buscar película" class="buscador-titulo">
    <input type="date" id="fechaSeleccionada" name="fechaSeleccionada" class= "calendario">
    `;

    return busc;
}

const contenedor = document.getElementById('buscadorInput');
const buscadorCartelera = GenerarbuscadorCartelera();
contenedor.appendChild(buscadorCartelera);
