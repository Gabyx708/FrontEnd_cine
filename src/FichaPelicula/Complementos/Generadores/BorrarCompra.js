async function EliminarConfirmarCompra(id) {
    const contenedor = document.getElementById(id);

    // Primero, elimina todo el contenido existente dentro del contenedor
    contenedor.innerHTML = '';

    // Luego, agrega el nuevo contenido
    // const unaFichaTecnica = ConfirmarCompra(funcionId, horario, fecha);
    // contenedor.appendChild(unaFichaTecnica);
}

const eliminarCompra = {
    Remove: EliminarConfirmarCompra
};

export default eliminarCompra;
