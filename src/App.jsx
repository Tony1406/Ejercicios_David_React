import './App.css'
import TarjetaUsuario from './5-1_tarjeta_usuario/TarjetaUsuario';
import ListaTareas from './5-2_lista_tareas/ListaTareas';
function App() {
  return (
    <div className="App">
      {/* <div className="tarjeta-usuario-app">
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
      </div> */}
      <div className="lista-tareas-app">
        <ListaTareas />
      </div>
    </div>
  )
}

export default App