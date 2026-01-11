// src/5-2_lista_tareas/ListaTareas.jsx
import { useState } from 'react';
import './ListaTareas.css'; // Importamos los estilos

function ListaTareas() {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tareaObjeto = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, tareaObjeto]);
    setNuevaTarea("");
  };

  const toggleCompletada = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <div className="lista-container">
      <h2>Lista de Tareas</h2>
      
      <div className="input-group">
        <input 
          type="text" 
          className="input-tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button className="btn-add" onClick={agregarTarea}>
          Añadir
        </button>
      </div>

      <ul className="lista">
        {tareas.map((tarea) => (
          <li 
            key={tarea.id} 
            // Usamos template literals para añadir la clase 'completada' condicionalmente
            className={`tarea-item ${tarea.completada ? 'completada' : ''}`}
          >
            <span>{tarea.texto}</span>
            <button 
              className="btn-accion"
              onClick={() => toggleCompletada(tarea.id)}
            >
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;