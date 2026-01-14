import { useState } from 'react';
import './ListaTareasAvanzada.css';

function ListaTareasAvanzada() {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim() === "") {
      return;
    }

    const tareaObjeto = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };
    
    setTareas([...tareas, tareaObjeto]);
    setNuevaTarea('');
  };

 const completarTarea = (idTarea) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === idTarea) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // Filtramos visualmente sin borrar datos
  const tareasVisibles = tareas.filter(tarea => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true; 
  });

  return (
    <div className="tareas-adv-container">
      <h3>Lista de Tareas Pro</h3>
      <form onSubmit={agregarTarea} className="form-tarea">
        <input value={nuevaTarea} onChange={e => setNuevaTarea(e.target.value)} placeholder="Nueva tarea..." />
        <button type="submit">Add</button>
      </form>

      <div className="filtros-btn">
        <button onClick={() => setFiltro('todas')} className={filtro === 'todas' ? 'activo' : ''}>Todas</button>
        <button onClick={() => setFiltro('pendientes')} className={filtro === 'pendientes' ? 'activo' : ''}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')} className={filtro === 'completadas' ? 'activo' : ''}>Listas</button>
      </div>

      <ul className="lista-adv">
        {tareasVisibles.map(tarea => (
          <li key={tarea.id} className={tarea.completada ? 'done' : ''} onClick={() => completarTarea(tarea.id)}>
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareasAvanzada;