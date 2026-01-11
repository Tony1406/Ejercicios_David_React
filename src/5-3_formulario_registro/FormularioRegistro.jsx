// src/5-3_formulario_registro/FormularioRegistro.jsx
import { useState } from 'react';
import './FormularioRegistro.css';

function FormularioRegistro() {
  // Estado único para agrupar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState(""); // Para mostrar errores o éxito

  // Manejador genérico para todos los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Actualizamos solo el campo que cambió, manteniendo los demás (...)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // EVITALA RECARGA DE LA PÁGINA (Muy importante)

    // Validaciones
    if (!formData.nombre.trim()) {
      setMensaje("El nombre es obligatorio");
      return;
    }

    if (!formData.email.includes('@')) {
      setMensaje("El correo debe contener un '@'");
      return;
    }

    if (formData.password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Si pasa todo:
    setMensaje("¡Registro exitoso! Revisa la consola.");
    console.log("Datos enviados al backend:", formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre" 
          className="form-input"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
      </div>

      <div className="form-group">
        <label>Correo:</label>
        <input
          type="email"
          name="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
        />
      </div>

      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          className="form-input"
          value={formData.password}
          onChange={handleChange}
          placeholder="******"
        />
      </div>

      {/* Renderizado condicional del mensaje */}
      {mensaje && (
        <p className={mensaje.includes("exitoso") ? "mensaje-exito" : "mensaje-error"}>
          {mensaje}
        </p>
      )}

      <button type="submit" className="btn-submit">Registrarse</button>
    </form>
  );
}

export default FormularioRegistro;