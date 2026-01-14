import './App.css'
import TarjetaUsuario from './5-1_tarjeta_usuario/TarjetaUsuario';
import ListaTareas from './5-2_lista_tareas/ListaTareas';
import FormularioRegistro from './5-3_formulario_registro/FormularioRegistro';
import ComunicacionPadreHijo from './5-4_comunicacion_padre_hijo/ComunicacionPadreHijo';
import ListaProductosFiltros from './5-5_lista_productos_filtros/ListaProductosFiltros';
import ContadorLimites from './6-1_contador_con_limites/ContadorLimites';
import ListaTareasAvanzada from './6-2_lista_tareas_avanzada/ListaTareasAvanzada';


function App() {
  return (
    <div className="App">
      <div className="contenedor-usuarios">
        <TarjetaUsuario 
          nombre="Carlos" 
          apellidos="Díaz" 
          edadInicial={28} 
          imagen="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <TarjetaUsuario 
          nombre="Ana" 
          apellidos="López" 
          edadInicial={34} 
          imagen="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <ListaTareas />
      </div>
     <div>
        <FormularioRegistro />
      </div>
      <div>
        <ComunicacionPadreHijo />
      </div>
      <div>
        <ListaProductosFiltros />
      </div>
      <div>
        <ContadorLimites />
      </div>
      <div>
        <ListaTareasAvanzada />
      </div>
    </div>
  )
}

export default App