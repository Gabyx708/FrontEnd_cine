const PostTickets = async (id, cantidad, usuario) => {
    let result = [];
    let url = `https://localhost:7247/api/v1/Funcion/${id}/tickets`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cantidad: cantidad,
                usuario: usuario,
            }),
        });

        if (response.ok) {
            result = await response.json();
        } else {
            console.error('Error en la solicitud:', response.status);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }

    return result;
};

const Api = {
    Post: PostTickets
};

export default Api;
