import ApiPelicula from '../services/peliculaApi.js';
import ApiFuncion from '../services/funcionApi.js';

//Carga las peliculas
async function cargarCarteleraDestacadas() {
    const seccionContenedora = document.getElementById('carteleraDestacada');
    let pelisDestacadas = [2,1,5,6,8]

    for (const pelicula of pelisDestacadas) {
        const unaPelicula = await ApiPelicula.Get(pelicula);
        if (pelicula) {
            GenerarPeliculaDestacada(unaPelicula, seccionContenedora);
        }
    }
}

//Crea la pelicula, este me lo voy a dejar para la sección destacados que voy a hacer cositis ahi :D
function GenerarPeliculaDestacada(pelicula, contenedor) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `
        <img class="imagenCartelera" src="${pelicula.poster}" alt="${pelicula.titulo}">
        <a class="textoCartelera">${pelicula.titulo}</a>
    `;
    contenedor.appendChild(peliculaElemento);
}

cargarCarteleraDestacadas();


async function cargarCartelera(id,fecha) {
    const seccionContenedora = document.getElementById(id);
    const peliculasRepetidas = new Set();
    // Obtén la lista de funciones de ApiFuncion.Get
    const funciones = await ApiFuncion.Get(fecha);

    // Itera sobre la lista de funciones y crea una película para cada una
    for (const funcion of funciones) {
        if (!peliculasRepetidas.has(funcion.pelicula.peliculaId)) {
            GenerarPeliculaCartelera(funcion, seccionContenedora);
            peliculasRepetidas.add(funcion.pelicula.peliculaId); // Agrega el ID al conjunto
        }
    }
}

//Crea la pelicula, este me lo voy a dejar para la sección destacados que voy a hacer cositis ahi :D
function GenerarPeliculaCartelera(funcion, contenedor) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `
        <img class="imagenCartelera" src="${funcion.pelicula.poster}" alt="${funcion.pelicula.titulo}">
        <a class="textoCartelera">${funcion.pelicula.titulo}</a>
    `;
    contenedor.appendChild(peliculaElemento);
}
cargarCartelera('cartelera');
cargarCartelera('carteleraHoy',"22/10/2023");