function GenerarbuscadorCartelera() {
    const busc = document.createElement('div');
    busc.className = 'container-filtrador';
    busc.innerHTML = `
    <ul class="menu-filtro">
        <li>
            <a href="#">GENERO <i class="fas fa-caret-down"></i></a>
            <ul class="submenu-filtro">
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="null"> REESTABLECER</a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genAc"> ACCION</a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genAv"> AVENTURA</a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genFi"> FICCION</a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genCo"> COMEDIA </a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genDo"> DOCUMENTAL </a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genDr"> DRAMA </a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genFa"> FANTASIA </a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genMu"> MUSICAL </a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genSu"> SUSPENSO </a></li>
                    <li> <a href="#" class="texto genero" data-filter-type="genero" data-filter-value="genTe"> TERROR </a> </li>  
            </ul>       
        </li>
        
    </ul>
    `;

    return busc;
}

const contenedor = document.getElementById('filtrosMain');
const buscadorCartelera = GenerarbuscadorCartelera();
contenedor.appendChild(buscadorCartelera);
