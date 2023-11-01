import GenerarFuncionYCompraRender from '../Renders/FuncionYCompraRender.js';
import ApiTicket from '../../../services/canTicketApi.js'

async function CargarFunciones(id,pelicula) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';
    if (pelicula.funciones.length === 0) {
        const mensajeNoEncontrado = document.createElement('div');
        mensajeNoEncontrado.textContent = 'NO HAY NINGUNA FUNCIÓN DISPONIBLE EN ESTE MOMENTO :(';
        seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        for (const funcion of pelicula.funciones) {
                const cantTickets = await ApiTicket.GetCantTickets(funcion.funcionId);
                seccionContenedora.appendChild(GenerarFuncionYCompraRender(pelicula,funcion, cantTickets.cantidad));
            }
        }
}

const funcionesDisponibles = {
    Get: CargarFunciones
};

export default funcionesDisponibles;

