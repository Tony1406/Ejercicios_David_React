import { useState, useEffect } from 'react';
import './CustomHook.css';

// --- CUSTOM HOOK (Lógica reutilizable) ---
function useCuentaAtras(tiempoInicial) {
  const [tiempo, setTiempo] = useState(tiempoInicial);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo = null;
    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((t) => t - 1);
      }, 1000);
    } else if (tiempo === 0) {
      setActivo(false);
    }
    // Cleanup: Limpiamos el intervalo si el componente muere o se pausa
    return () => clearInterval(intervalo);
  }, [activo, tiempo]);

  const reiniciar = () => {
    setTiempo(tiempoInicial);
    setActivo(false);
  };

  // El hook devuelve variables y funciones para que quien lo use las controle
  return { tiempo, activo, setActivo, reiniciar };
}

// --- COMPONENTE (Interfaz Visual) ---
function CustomHook() {
  // Llamamos a nuestro hook
  const { tiempo, activo, setActivo, reiniciar } = useCuentaAtras(10);

  return (
    <div className="hook-container">
      <h3>Custom Hook: Temporizador</h3>
      <div className="reloj">{tiempo}s</div>
      
      <div className="controles">
        <button onClick={() => setActivo(!activo)}>
          {activo ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={reiniciar} className="btn-reset">Reiniciar</button>
      </div>
    </div>
  );
}

export default CustomHook;