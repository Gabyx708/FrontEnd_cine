function GenerarNavBuscador() {
    const navVertical = document.createElement('nav');
    navVertical.className = 'navegacionVertical';
    navVertical.innerHTML = `
    <ul class="buscadorVertical">
                <li>
                    <a>Buscar</a>
                </li>
                <li>
                    <a>Filtros</a>
                    <ul class="filtroGenero">
                        <li><a>Genero</a>
                            <ul id="checklist">
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genAc"> <label class="form-check-label" for="genAc"> ACCION </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genAv"> <label class="form-check-label" for="genAv"> AVENTURA </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genFi"> <label class="form-check-label" for="fgenFi"> FICCION </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genCo"> <label class="form-check-label" for="fgenCo"> COMEDIA </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genDo"> <label class="form-check-label" for="fgenDo"> DOCUMENTAL </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genDr"> <label class="form-check-label" for="fgenDr"> DRAMA </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genFa"> <label class="form-check-label" for="fgenFa"> FANTASIA </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genMu"> <label class="form-check-label" for="fgenMu"> MUSICAL </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genSu"> <label class="form-check-label" for="fgenSu"> SUSPENSO </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="genTe"> <label class="form-check-label" for="fgenTe"> TERROR </label>
                            </ul>
                        </li>
                        <li class="filtroFecha">
                            <a>Cuando</a>
                            <ul id="checklist">
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="funHo"> <label class="form-check-label" for="funHo"> HOY </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="funPr"> <label class="form-check-label" for="funPr"> PROXIMAS </label>
                                <li class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="funPe"> <label class="form-check-label" for="funPe"> <input type="text" placeholder="Buscar">  </label>
                            </ul>
                        </li>
                        
                        
                    </ul>
                </li>
            </ul>
    `;
    return navVertical;
}
const contenedor = document.getElementById('buscadorVertical');
const barraNavegacion = GenerarNavBuscador();
contenedor.appendChild(barraNavegacion);