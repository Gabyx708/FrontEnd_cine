import ConfirmarCompra from '../Renders/ConfirmarCompraRender.js'

async function CargarConfirmarCompra(id,funcion) {
    const contenedor = document.getElementById(id);
    const unaFichaTecnica = ConfirmarCompra(funcion);
    contenedor.appendChild(unaFichaTecnica);
}

const confirmarCompra = {
    Get: CargarConfirmarCompra
};

export default confirmarCompra;