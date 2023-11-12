import CargarCarteleraDestacadas from '../CarteleraRenders/DestacadasCartelera.js';
import CargarCartelera from '../CarteleraRenders/PeliculasCarteleraGen.js';

function aplicarDesplazamiento(scrollContainer, scrollArrowLeft, scrollArrowRight) {
    scrollArrowLeft.addEventListener('click', () => {
        let containerWidth = scrollContainer.clientWidth;
        console.log("El widht: " + containerWidth);
        scrollContainer.scrollBy({
            left: -containerWidth,
            behavior: 'smooth' 
        });
    });

    scrollArrowRight.addEventListener('click', () => {
        let containerWidth = scrollContainer.clientWidth;
        console.log("El widht: " + containerWidth);
        scrollContainer.scrollBy({
            left: containerWidth, 
            behavior: 'smooth'
        });
    });
}


async function cargarContenidoAsincronico() {
    await CargarCarteleraDestacadas.Get;
    const fechaHoy = new Date().toLocaleDateString('es-ES');
    await CargarCartelera.Get('carteleraHoy', fechaHoy, null, null);
    await CargarCartelera.Get('cartelera', null, null, null);
}

cargarContenidoAsincronico().then(() => {
    const flexingContainers = document.querySelectorAll('.contenedor-cartelera');

    flexingContainers.forEach(flexingContainer => {
        const scrollArrowLeft = flexingContainer.querySelector('.scroll-arrow-left');
        const scrollArrowRight = flexingContainer.querySelector('.scroll-arrow-right');
        const scrollContainer = flexingContainer.querySelector('.SeccionCartelera');
        aplicarDesplazamiento(scrollContainer, scrollArrowLeft, scrollArrowRight);
    });
});




