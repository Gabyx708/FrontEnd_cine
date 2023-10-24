import CargarCartelera from '../../CarteleraRenders/PeliculasCarteleraGen.js';

document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('inputBusqueda');

    if (inputBusqueda) {
        inputBusqueda.addEventListener('input', function() {
            const titulo = inputBusqueda.value;
            CargarCartelera.Get('cartelera', null, titulo, null);
        });
    }

    function cargarCarteleraInicial() {
        // Obtén el valor del parámetro "fecha" de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const fechaParametro = urlParams.get("fecha");

        if (fechaParametro === "hoy") {
            // Si el valor de "fecha" es "hoy," carga la cartelera según la fecha actual
            const fechaHoy = new Date().toLocaleDateString('es-ES');
            CargarCartelera.Get('cartelera', fechaHoy, null, null);
        } else {
            // Si no se proporciona una fecha válida en la URL, carga la cartelera inicial
            CargarCartelera.Get('cartelera', null, null, null);
        }
    }

    cargarCarteleraInicial();
});


