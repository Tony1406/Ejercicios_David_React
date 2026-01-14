import { useState } from 'react';
import './FormularioRegistro.css';

function FormularioRegistro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState(""); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    setMensaje("¡Registro exitoso! Revisa la consola.");
    console.log(formData);
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