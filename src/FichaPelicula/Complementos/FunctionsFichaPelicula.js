import GenerarCompra from '../../FichaPelicula/Complementos/Generadores/GenerarCompra.js';
import BorrarCompra from '../../FichaPelicula/Complementos/Generadores/BorrarCompra.js';
import TicketApi from '../../services/comTicketsApi.js'
import GenerarVentanaModal from '../../FichaPelicula/Complementos/Generadores/GenerarVentanaModal.js';
import BorrarVentanaModal from '../../FichaPelicula/Complementos/Generadores/BorrarVentanaModal.js';

let guardarIdPelicula = null;
let nombreUsuario = '';
const modal = document.getElementById('miVentanaModal');
const botonCerrar = document.getElementById('cerrarModal');

document.addEventListener('DOMContentLoaded', function () {
    const funcionesContainer = document.getElementById('confirmar-compra');
    let cantidadBoletos = 0;
    let ventanaModal = null;


    funcionesContainer.addEventListener('click', (event) => {
        const clickedElement = event.target;

        const inputNombre = funcionesContainer.querySelector('.input-nombre');
        inputNombre.addEventListener('input', (event) => {
            nombreUsuario = event.target.value;
        });

        let resultadoTicket=null;

        if (clickedElement.classList.contains('bor-izq')) {
            const contadorElement = clickedElement.parentElement.querySelector('.cantidad-boletos');
            cantidadBoletos = parseInt(contadorElement.textContent) || 0;

            if (cantidadBoletos > 0) {
                cantidadBoletos--;
                contadorElement.textContent = cantidadBoletos;
            }
        } else if (clickedElement.classList.contains('bor-der')) {
            const contadorElement = clickedElement.parentElement.querySelector('.cantidad-boletos');
            cantidadBoletos = parseInt(contadorElement.textContent) || 0;
            cantidadBoletos++;
            contadorElement.textContent = cantidadBoletos;
        }

        if (clickedElement.classList.contains('boton-compra')) {
            if (guardarIdPelicula != 0 && cantidadBoletos > 0 && nombreUsuario != '')
            {
                console.log(ventanaModal)
                if (ventanaModal)
                {
                   ventanaModal=BorrarVentanaModal.Remove('miVentanaModal')
                }
                ventanaModal=CrearTicket(guardarIdPelicula,cantidadBoletos,nombreUsuario);
            }
            
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const funcionesContainer = document.getElementById('funcion-compra');
    let compraInstance = null;

    funcionesContainer.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('texto-ticket')) {
            const parentFuncion = clickedElement.closest('.funciones-disponibles');
            const fechaElement = parentFuncion.querySelector('#fecha');
            const horarioElement = parentFuncion.querySelector('#horario');
            const funcionElement = parentFuncion.querySelector('#funcion');
            const cantidadElement = parentFuncion.querySelector('#cantidad');
            if (fechaElement && horarioElement) {
                const fecha = fechaElement.textContent;
                const horario = horarioElement.textContent;
                const dataId = funcionElement.textContent;
                const cantidad = cantidadElement.textContent

                if (compraInstance) {
                    compraInstance=BorrarCompra.Remove('confirmar-compra');
                    guardarIdPelicula=null;
                }
                compraInstance = GenerarCompra.Get('confirmar-compra', dataId, horario, fecha, cantidad);
                guardarIdPelicula = Number(dataId);
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modalContainer = document.getElementById('miVentanaModal');
    modalContainer.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('cerrar-modal')) {
            cerrarModal();
        }
    })
});



function mostrarModal() {
    modal.style.display = 'block';
}

function cerrarModal() {
    modal.style.display = 'none';
}

async function CrearTicket(guardarIdPelicula,cantidadBoletos,nombreUsuario)
{
    const resultadoTicket= await TicketApi.Post(guardarIdPelicula,cantidadBoletos,nombreUsuario);
    let ventanaModal= await GenerarVentanaModal.Get('miVentanaModal',resultadoTicket);
    mostrarModal();
    return ventanaModal
}















