import GenerarCompra from '../../FichaPelicula/Complementos/Generadores/GenerarCompra.js';
import BorrarCompra from '../../FichaPelicula/Complementos/Generadores/BorrarCompra.js';

document.addEventListener('DOMContentLoaded', function () {
    const funcionesContainer = document.getElementById('confirmar-compra');
    let cantidadBoletos = 0;
    funcionesContainer.addEventListener('click', (event) => {

        const clickedElement = event.target;

        if (clickedElement.classList.contains('bor-izq') ) {
            const contadorElement = clickedElement.parentElement.querySelector('.cantidad-boletos');
            cantidadBoletos = parseInt(contadorElement.textContent) || 0;

            if (cantidadBoletos > 0) {
                cantidadBoletos--;
                contadorElement.textContent = cantidadBoletos;
            }
        }
        else if (clickedElement.classList.contains('bor-der')) {
            const contadorElement = clickedElement.parentElement.querySelector('.cantidad-boletos');
            cantidadBoletos = parseInt(contadorElement.textContent) || 0;
            cantidadBoletos++;
            contadorElement.textContent = cantidadBoletos;
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
                }
                compraInstance = GenerarCompra.Get('confirmar-compra', dataId, horario, fecha, cantidad);
            }
        }
    });
});
















