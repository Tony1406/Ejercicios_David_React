import { createContext, useContext, useState } from 'react';
import './CambioTema.css';

// 1. Crear el Contexto (La "Nube")
const TemaContext = createContext();

// 2. Componente Provider (El que emite la señal)
const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const toggleTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  return (
    // "value" es lo que será accesible para todos los hijos
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};

// 3. Componente Consumidor (Usa el hook useContext)
const Tarjeta = () => {
  const { tema } = useContext(TemaContext); // Accede directo a la nube
  return (
    <div className={`card-demo ${tema}`}>
      <h4>Tarjeta en modo {tema}</h4>
      <p>El estilo cambia leyendo el Contexto global.</p>
    </div>
  );
};

const BotonTema = () => {
  const { tema, toggleTema } = useContext(TemaContext);
  return (
    <button onClick={toggleTema}>
      Cambiar a {tema === 'claro' ? 'Oscuro 🌙' : 'Claro ☀️'}
    </button>
  );
};

// 4. Componente Principal
function CambioTema() {
  return (
    <ProveedorTema>
      <div className="tema-container">
        <h3>Context API - Temas</h3>
        <Tarjeta />
        <br />
        <BotonTema />
      </div>
    </ProveedorTema>
  );
}

export default CambioTema;