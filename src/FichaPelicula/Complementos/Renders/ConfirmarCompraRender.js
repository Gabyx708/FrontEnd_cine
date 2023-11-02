export default function GenerarCompra(funcionId,horario,fecha,disponibles) {
    const compra = document.createElement('div');
    compra.className = 'confirmar-compra';
    compra.innerHTML = `
        <h4 class='texto-compra'>COMPLETAR COMPRA</h4>
        <a class='texto-compra' id="fecha"> FECHA: ${fecha} <a>
        <a class='texto-compra' id="horario"> HORARIO: ${horario} <a>
        <a class='texto-compra' id="disponibles"> DISPONIBLES: ${disponibles} <a>
        <input type="text" placeholder="Ingrese su nombre" class="input-nombre">
        <div class="boton-comprar">
            <a class="botones-aum-dis bor-izq" id="disminuir">-</a> 
            <a class="cantidad-boletos" id="contador-boletos">0</a>
            <a class="botones-aum-dis bor-der" id="aumentar">+</a>
        </div>
        <div class="container-boton-compra">
            <a class="boton-compra">CONFIRMAR</a>
        </div>
  
    `;

    return compra;
};