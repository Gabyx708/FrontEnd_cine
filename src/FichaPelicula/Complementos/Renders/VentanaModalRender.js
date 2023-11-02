export default function CrearVentandaModal(ticketResponse,ticket) {
    const ventMod = document.createElement('div');
    ventMod.className = 'modal-contenido';
    ventMod.innerHTML = `
        <span class="cerrar-modal" id="cerrarModal">&times;</span>
        <h5>CONFIRMACION DE TICKET<h5>
        <table class="tabla-tecnica">
                <thead>
                    <tr><th colspan="2"> <a>CINETRON TICKET<a> </a></tr>
                   
                </thead>
                <tbody>
                    <tr>
                        <th class="sinopsis">
                            <a>TICKETS:<a>
                        </th>
                        <th class="sinopsis">
                            <a>${ticketResponse.tickets}</a>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <a>USUARIO:<a>
                        </th>
                        <th>
                            <a>${ticketResponse.usuario.toUpperCase()}</a>
                        </th>
                    </tr>
                    <tr>
                        <th class="sinopsis">TITULO:</th>
                        <th class="sinopsis">
                            ${ticketResponse.funcion.pelicula.titulo.toUpperCase()}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <a>FECHA:<a>
                        </th>
                        <th>
                            <a id="fecha">${ticketResponse.funcion.fecha}</a>
                        </th>
                    </tr>
                    <tr>
                    <th>
                        <a>HORARIO:<a>
                    </th>
                    <th>
                        <a>${ticketResponse.funcion.horario}</a>
                    </th>
                </tr>
                    <tr>
                        <th>
                            <a>SALA:<a>
                        </th>
                        <th>
                            <a id="fecha">${ticketResponse.funcion.sala.nombre.toUpperCase()}</a>
                        </th>
                    </tr>
                </tbody>
            </table>
    `;

    return ventMod;
};

{/* <div>
<a>${ticketResponse.tickets}</a>
<a>'FuncionId: '${ticketResponse.funcion.funcionId}</a>
<a>'Titulo: '${ticketResponse.funcion.pelicula.titulo}</a>
<a>'Sala: '${ticketResponse.funcion.sala.nombre}</a>
<a>'Fecha: '${ticketResponse.funcion.fecha}</a>
<a>'Horario: '${ticketResponse.funcion.horario}</a>
<a>'Usuario: '${ticketResponse.usuario}</a>
</div> */}

{/* <a>${ticketResponse.tickets}</a> */}
// {
//     "tickets": [
//       "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//     ],
//     "funcion": {
//       "funcionId": 0,
//       "pelicula": {
//         "peliculaId": 0,
//         "titulo": "string",
//         "poster": "string",
//         "genero": {
//           "id": 0,
//           "nombre": "string"
//         }
//       },
//       "sala": {
//         "id": 0,
//         "nombre": "string",
//         "capacidad": 0
//       },
//       "fecha": "string",
//       "horario": "string"
//     },
//     "usuario": "string"
//   }