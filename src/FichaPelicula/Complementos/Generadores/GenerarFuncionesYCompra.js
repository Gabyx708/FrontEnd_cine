import GenerarFuncionYCompraRender from '../Renders/FuncionYCompraRender.js';

async function CargarFunciones(id,pelicula) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';
    if (pelicula.funciones.length === 0) {
        const mensajeNoEncontrado = document.createElement('div');
        mensajeNoEncontrado.textContent = 'No hay ninguna función disponible en este momento :(';
        seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        for (const funcion of pelicula.funciones) {
                seccionContenedora.appendChild(GenerarFuncionYCompraRender(pelicula,funcion));
            }
        }
}

const funcionesDisponibles = {
    Get: CargarFunciones
};

export default funcionesDisponibles;

