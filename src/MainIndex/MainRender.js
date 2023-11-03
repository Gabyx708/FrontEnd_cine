
import CargarCarteleraDestacadas from '../CarteleraRenders/DestacadasCartelera.js'
import CargarCartelera from '../CarteleraRenders/PeliculasCarteleraGen.js'

CargarCarteleraDestacadas.Get;
const fechaHoy = new Date().toLocaleDateString('es-ES');
CargarCartelera.Get('carteleraHoy', fechaHoy,null,null);
CargarCartelera.Get('cartelera', null,null,null);
