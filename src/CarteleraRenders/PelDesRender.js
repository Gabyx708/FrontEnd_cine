export default function GenerarPeliDestacada(pelicula) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `
        <img class="imagenCartelera" src="${pelicula.poster}" alt="${pelicula.titulo}">
        <a class="textoCartelera">${pelicula.titulo}</a>
    `;
    return peliculaElemento;
}
