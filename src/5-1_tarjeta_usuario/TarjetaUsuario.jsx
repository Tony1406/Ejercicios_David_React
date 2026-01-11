import { useState } from 'react';
import './TarjetaUsuario.css';

function TarjetaUsuario({ nombre, apellidos, edadInicial, imagen }) {
  const [edad, setEdad] = useState(edadInicial);

  const cumplirAños = () => {
    setEdad(edad + 1);
  };

  return (
    <div className="tarjeta-usuario">
      <img 
        src={imagen} 
        alt="Perfil" 
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
      />
      <h3>{nombre} {apellidos}</h3>
      <p>Edad: <strong>{edad} años</strong></p>
      
      <button onClick={cumplirAños}>Cumplir años</button>
    </div>
  );
}

export default TarjetaUsuario;