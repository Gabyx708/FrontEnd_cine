// const getFunciones = async (fecha,titulo,genero) => {
//     let result = [];
//     let response = await fetch(`https://localhost:7247/api/v1/Funcion?fecha=${fecha}&titulo=${titulo}&genero=${genero}`);
//     if (response.ok){
//         result = await response.json();
//     }
//     return result;
// }
// const Api = {
//     Get : getFunciones
// }
// export default Api;

const getFunciones = async (fecha, titulo, genero) => {
    let result = [];
    let url = `https://localhost:7247/api/v1/Funcion?`;

    if (fecha) {
        url += `fecha=${encodeURIComponent(fecha)}&`;
    }
    if (titulo) {
        url += `titulo=${encodeURIComponent(titulo)}&`;
    }
    if (genero) {
        url += `genero=${encodeURIComponent(genero)}&`;
    }
    
    if (url.endsWith('&')) {
        url = url.slice(0, -1);
    }

    let response = await fetch(url);

    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const Api = {
    Get: getFunciones
};

export default Api;