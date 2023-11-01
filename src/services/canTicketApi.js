const getCantidadTickets = async (id) => {
    let result = [];
    let response = await fetch(`https://localhost:7247/api/v1/Funcion/${id}/tickets`);
    if (response.ok){
        result = await response.json();
    }
    return result;
}

const ApiCantidad = {
    GetCantTickets : getCantidadTickets
};

export default ApiCantidad;