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
            if (ObtenerDate(funcion.fecha) >= new Date(ObtenerDiaDeHoy())) {
                const cantTickets = await ApiTicket.GetCantTickets(funcion.funcionId);
                if (cantTickets.cantidad > 0)
                {
                    seccionContenedora.appendChild(GenerarFuncionYCompraRender(pelicula, funcion, cantTickets.cantidad));
                    contador= contador + 1;
                }
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
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function ObtenerDate(fechaString)
{
    const [day, month, year] = fechaString.split('-').map(Number);
    return new Date(year, month - 1, day);
}