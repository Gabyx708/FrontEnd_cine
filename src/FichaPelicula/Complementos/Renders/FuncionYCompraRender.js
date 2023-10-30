export default function GenerarFuncionYCompra(pelicula, funcion) {
    const funcionesDiponibles = document.createElement('div');
    funcionesDiponibles.className = 'funciones-disponibles';
    funcionesDiponibles.innerHTML = `
                            <a href="#" class="contenedor-funcion">
                                <table class="tabla-funciones">
                                    <tbody>
                                        <tr>
                                            <th colspan="2"><a>${pelicula.titulo.toUpperCase()}</a></th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <a>FECHA:<a>
                                            </th>
                                            <th>
                                                <a>${funcion.fecha}</a>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <a>HORARIO:<a>
                                            </th>
                                            <th>
                                                <a>${funcion.horario}
                                            </th>
                                        </tr>
                                        
                                      
                                    </tbody>
                                </table>
                            </a>
    `;

    return funcionesDiponibles;
};

