const getFunciones = async (fecha, titulo, genero) => {
    let result = [];
    let url = `https://localhost:7247/api/v1/Funcion/{id}/cantidad&usuario`;

    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const Api = {
    Get: getFunciones
};

export default Api;