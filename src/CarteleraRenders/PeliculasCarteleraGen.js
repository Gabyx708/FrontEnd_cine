import ApiFuncion from '../services/funcionApi.js';
import GenerarPeliculaCartelera from './CarteleraRender.js'

async function CargarCartelera(id, fecha, titulo, genero) {
    const seccionContenedora = document.getElementById(id);
    const funciones = await ApiFuncion.Get(fecha, titulo, genero);

    seccionContenedora.innerHTML = '';

    if (funciones.length === 0) {
        const mensajeNoEncontrado = document.createElement('div');
        mensajeNoEncontrado.textContent = 'No hay ninguna función disponible en este momento :(';
        seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        const peliculasRepetidas = new Set();
        for (const funcion of funciones) {
            if (!peliculasRepetidas.has(funcion.pelicula.peliculaId)) {
                seccionContenedora.appendChild(GenerarPeliculaCartelera(funcion));
                peliculasRepetidas.add(funcion.pelicula.peliculaId);
            }
        }
    }
}

const cartelera = {
    Get: CargarCartelera
};

export default cartelera;

