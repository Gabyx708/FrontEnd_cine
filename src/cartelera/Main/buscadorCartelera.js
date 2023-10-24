function GenerarbuscadorCartelera() {
    const busc = document.createElement('div');
    busc.className = 'menu-bar';
    busc.innerHTML = `
    <ul>
        <li><a href="#">Filtros <i class="fas fa-caret-down"></i></a>
            <div class="dropdown-menu">
                <ul>
                <li>
                    <a href="#">Generos <i class="fas fa-caret-right"></i></a>
                    
                    <div class="dropdown-menu-1">
                    <ul>
                        <li> <a class="texto" id="genAc"> ACCION </a></li>
                        <li> <a class="texto" id="genAv"> AVENTURA </a></li>
                        <li> <a class="texto" id="genFi"> FICCION </a></li>
                        <li> <a class="texto" id="genCo"> COMEDIA </a></li>
                        <li> <a class="texto" id="genDo"> DOCUMENTAL </a></li>
                        <li> <a class="texto" id="genDr"> DRAMA </a></li>
                        <li> <a class="texto" id="genFa"> FANTASIA </a></li>
                        <li> <a class="texto" id="genMu"> MUSICAL </a></li>
                        <li> <a class "texto" id="genSu"> SUSPENSO </a></li>
                        <li> <a class="texto" id="genTe"> TERROR </a> </li>
                    </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Fechas <i class="fas fa-caret-right"></i></a>
                    
                    <div class="dropdown-menu-1">
                        <ul>
                            <li> <a class="texto" id="genAc"> HOY </a></li>
                            <li> <a class="texto" id="genAv"> PROXIMAS </a></li>
                            <li> <a class="texto" id="genFi"> CUSTOM </a></li>
                        </ul>
                    </div>
                </li>
                </ul>
            </div>
        </li>
    </ul>`;

    return busc;
}

const contenedor = document.getElementById('filtrosMain');
const buscadorCartelera = GenerarbuscadorCartelera();
contenedor.appendChild(buscadorCartelera);
