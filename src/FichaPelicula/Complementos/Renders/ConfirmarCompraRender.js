export default function GenerarCompra(funcion) {
    const compra = document.createElement('div');
    compra.className = '';
    compra.innerHTML = `
        <ul>
            <li>Titulo</li>
            <li>Fecha</li>
            <li>Horario</li>
            <li>Sala</li>
            <li>Disponibles</li>
        </ul>
        <div class="boton-comprar">
            <label class="botones-aum-dis bor-izq" id="disminuir">-</label> 
            <label class="cantidad-boletos" id="contador-boletos">0</label>
            <label class="botones-aum-dis bor-der" id="aumentar">+</label>
        </div>
        <a>Confirmar</a>
    `;

    return compra;
};