export default function GenerarFuncionYCompra(pelicula, funcion, cantTickets) {
    const funcionesDiponibles = document.createElement('div');
    funcionesDiponibles.className = 'funciones-disponibles';
    funcionesDiponibles.innerHTML = `
        <a class="contenedor-funcion">
            <table class="tabla-funciones">
                <tbody>
                    <tr>
                        <th colspan="2"><a>${pelicula.titulo.toUpperCase()}</a> <a id='funcion'>${funcion.funcionId}</a</th>
                    </tr>
                    <tr>
                        <th>
                            <a>FECHA:<a>
                        </th>
                        <th>
                            <a id="fecha">${funcion.fecha}</a>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <a>HORARIO:<a>
                        </th>
                        <th>
                            <a id="horario" data-horario="${funcion.horario}">${funcion.horario}</a>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <a class="texto-ticket" id="test" data-id="${funcion.funcionId}">DISPONIBLES:</a>
                        </th>
                        <th>
                            <a id="cantidad"> ${cantTickets} </a>
                        </th>
                </tbody>
            </table>
        </a>
        <div class="contenedor-tickets">
        
            <div class="boton-boleto">
                <a class="texto-ticket">
                    SACAR BOLETO
                </a>
            </div>
        </div>
    `;

    return funcionesDiponibles;
};

