import { useState } from 'react';
import './ListaTareas.css';

function ListaTareas() {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();

    if (nuevaTarea.trim() === "") {
      return;
    }

    const tareaObjeto = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, tareaObjeto]);
    setNuevaTarea("");
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

  return (
    <div className="lista-container">
      <h2>Lista de Tareas</h2>
      
      <form onSubmit={agregarTarea} className="input-group">
        <input 
          type="text" 
          className="input-tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button className="btn-add">
          Añadir
        </button>
      </form>

      <ul className="lista">
        {tareas.map((tarea) => (
          <li 
            key={tarea.id} 
            className={tarea.completada ? 'completada' : ''}
          >
            <span>{tarea.texto}</span>
            <button onClick={() => completarTarea(tarea.id)}>
              {tarea.completada ? 'Marcar como no completada' : 'Marcar como completada'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;