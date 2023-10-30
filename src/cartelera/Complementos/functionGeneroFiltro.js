import CargarCartelera from '../../CarteleraRenders/PeliculasCarteleraGen.js';

document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('inputBusqueda');
    const generos = document.querySelectorAll('.genero');
    const fechas = document.querySelectorAll('.fecha');
    const fechaSeleccionadaInput = document.getElementById('fechaSeleccionada'); // Agregado

    const generoIdMap = {
        'genAc': 1,
        'genAv': 2,
        'genCi': 3,
        'genFi': 4,
        'genCo': 5,
        'genDo': 6,
        'genDr': 7,
        'genFa': 8,
        'genMu': 9,
        'genSu': 10,
        'genTe': 11
    };

    generos.forEach(genero => {
        genero.addEventListener('click', handleFilterClick);
    });

    fechas.forEach(fecha => {
        fecha.addEventListener('click', handleFilterClick);
    });

    if (inputBusqueda) {
        inputBusqueda.addEventListener('input', handleFilterInput);
    }

    if (fechaSeleccionadaInput) {
        fechaSeleccionadaInput.addEventListener('change', handleFilterInput);
    }

    function handleFilterClick(event) {
        const filterType = event.target.getAttribute('data-filter-type');
        const filterValue = event.target.getAttribute('data-filter-value');

        if (filterType === 'genero') {
            selectedValues.generoId = generoIdMap[filterValue];
        }
        applyFilters();
    }

    function handleFilterInput(event) {
        if (event.target === fechaSeleccionadaInput) {
            selectedValues.fechaParametro = fechaSeleccionadaInput.value;
        } else {
            selectedValues.titulo = event.target.value;
        }
        applyFilters();
    }

    function applyFilters() {
        const { titulo, generoId, fechaParametro } = selectedValues;
        CargarCartelera.Get('cartelera', fechaParametro, titulo, generoId);
    }

    // Initialize selectedValues with defaults
    const selectedValues = {
        titulo: '',
        generoId: null,
        fechaParametro: null,
    };

    applyFilters();
});





