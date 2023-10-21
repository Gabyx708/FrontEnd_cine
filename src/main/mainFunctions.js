import Api from '../services/peliculaApi.js';

//Carga las peliculas
async function cargarPeliculas() {
    const productosContenedor = document.getElementById('cartelera');

    for (let i = 1; i <= 4; i++) {
        const pelicula = await Api.Get(i);
        if (pelicula) {
            crearPelicula(pelicula, productosContenedor);
        }
    }
}

//Crea la pelicula, este me lo voy a dejar para la sección destacados que voy a hacer cositis ahi :D
function crearPelicula(pelicula, contenedor) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `
        <img class="imagenCartelera" src="${pelicula.poster}" alt="${pelicula.titulo}">
        <a class="textoCartelera">${pelicula.titulo}</a>
    `;
    contenedor.appendChild(peliculaElemento);
}

cargarPeliculas();

