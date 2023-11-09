import CargarCarteleraDestacadas from '../CarteleraRenders/DestacadasCartelera.js';
import CargarCartelera from '../CarteleraRenders/PeliculasCarteleraGen.js';

function aplicarDesplazamiento(scrollContainer, scrollArrowLeft, scrollArrowRight) {
    const containerWidth = scrollContainer.scrollWidth / 3.3;
    scrollArrowLeft.addEventListener('click', () => {
        console.log('Hiciste clic en la flecha izquierda');
        scrollContainer.scrollBy({
            left: -containerWidth,
            behavior: 'smooth' 
        });
    });

    scrollArrowRight.addEventListener('click', () => {
        const containerWidth = scrollContainer.scrollWidth / 3.3;
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




