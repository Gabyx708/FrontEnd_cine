import ApiFuncion from '../services/funcionApi.js';
import GenerarPeliculaCartelera from './CarteleraRender.js'

async function CargarCartelera(id, fecha, titulo, genero) {
    const seccionContenedora = document.getElementById(id);
    const funciones = await ApiFuncion.Get(fecha, titulo, genero);
    seccionContenedora.innerHTML = '';

    if (funciones.length === 0) {
        const mensajeNoEncontrado = document.createElement('div');
        mensajeNoEncontrado.textContent = 'NO HAY NINGUNA FUNCIÓN DISPONIBLE EN ESTE MOMENTO :(';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        const peliculasRepetidas = new Set();
        for (const funcion of funciones) {
            if (!peliculasRepetidas.has(funcion.pelicula.peliculaId) && ObtenerDate(funcion.fecha) >= new Date(ObtenerDiaDeHoy())) {
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

function SinFunciones(seccionContenedora)
{
    const mensajeNoEncontrado = document.createElement('div');
    mensajeNoEncontrado.textContent = 'NO HAY NINGUNA FUNCIÓN DISPONIBLE EN ESTE MOMENTO :(';
    return seccionContenedora.appendChild(mensajeNoEncontrado);
}

function ObtenerDiaDeHoy()
{
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function ObtenerDate(fechaString)
{
    const [day, month, year] = fechaString.split('-').map(Number);
    return new Date(year, month - 1, day);
}