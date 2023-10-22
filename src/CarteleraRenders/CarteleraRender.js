export default function GenerarPeliculaCartelera(funcion) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `
        <img class="imagenCartelera" src="${funcion.pelicula.poster}" alt="${funcion.pelicula.titulo}">
        <a class="textoCartelera">${funcion.pelicula.titulo}</a>
    `;
    return peliculaElemento;
};

