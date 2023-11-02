import GenerarFuncionYCompraRender from '../Renders/FuncionYCompraRender.js';
import ApiTicket from '../../../services/canTicketApi.js';

async function CargarFunciones(id, pelicula) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';

    if (pelicula.funciones.length === 0) {
        SinFunciones(seccionContenedora)
    } else {
        let contador = 0;
        for (const funcion of pelicula.funciones) {
            const fechaFuncion = new Date(funcion.fecha);
            if (funcion.fecha <= ObtenerDiaDeHoy()) {
                const cantTickets = await ApiTicket.GetCantTickets(funcion.funcionId);
                seccionContenedora.appendChild(GenerarFuncionYCompraRender(pelicula, funcion, cantTickets.cantidad));
                contador= contador + 1;
            }
        }
        if (contador === 0)
        {
            SinFunciones(seccionContenedora)
        }
    }
}

const funcionesDisponibles = {
    Get: CargarFunciones
};

export default funcionesDisponibles;

function SinFunciones(seccionContenedora)
{
    const mensajeNoEncontrado = document.createElement('div');
    mensajeNoEncontrado.textContent = 'NO HAY NINGUNA FUNCIÓN DISPONIBLE EN ESTE MOMENTO :(';
    return seccionContenedora.appendChild(mensajeNoEncontrado);
}

function ObtenerDiaDeHoy()
{
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}