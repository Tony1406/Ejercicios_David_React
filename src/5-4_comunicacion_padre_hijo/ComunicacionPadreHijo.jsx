import { useState } from 'react';
import './ComunicacionPadreHijo.css';

function Hijo({ pedirDinero }) {
  return (
    <div className="hijo-card">
      <button onClick={pedirDinero}>Pedir dinero</button>
    </div>
  );
}

function ComunicacionPadreHijo() {
  const [dinero, setDinero] = useState(0);

  const incrementarDinero = () => {
    setDinero(dinero + 10);
  };

  return (
    <div className="padre-container">
      <p>Dinero acumulado: <strong>{dinero}€</strong></p>
      <Hijo pedirDinero={incrementarDinero} />
    </div>
  );
}

export default ComunicacionPadreHijo;