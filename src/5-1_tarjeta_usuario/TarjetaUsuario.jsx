import { useState } from 'react';
import './TarjetaUsuario.css';

function TarjetaUsuario({ nombre, apellidos, edadInicial, imagen }) {
  const [edad, setEdad] = useState(edadInicial);

  const cumplirAños = () => {
    setEdad(edad + 1);
  };

  return (
    <div className="tarjeta">
      <img 
        src={imagen} 
        alt="Perfil" 
        className="foto-perfil"
      />
      <h3>{nombre} {apellidos}</h3>
      <p>Edad: {edad} años</p>
      
      <button onClick={cumplirAños}>
        Cumplir años
      </button>
    </div>
  );
}

export default TarjetaUsuario;