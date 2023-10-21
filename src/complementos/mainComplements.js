const createSectionHTML = (sectionData) => {
    return `
    <div class="peliculaCartelera">
        <img class="imagenCartelera" src="${sectionData.poster}" alt="${sectionData.titulo}">
        <a class="textoCartelera">${sectionData.titulo}</a>
    </div>
    `;
};

export default createSectionHTML;


