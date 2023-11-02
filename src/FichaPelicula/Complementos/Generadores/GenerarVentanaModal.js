import VentanaModal from '../Renders/VentanaModalRender.js';

async function CargarVentanaModal(id, ticketResponse) {
    const contenedor = document.getElementById(id);
    const unaVentanaModal = await VentanaModal(ticketResponse);
    contenedor.appendChild(unaVentanaModal);
}

const laVentanaModal = {
    Get: CargarVentanaModal
};

export default laVentanaModal;
