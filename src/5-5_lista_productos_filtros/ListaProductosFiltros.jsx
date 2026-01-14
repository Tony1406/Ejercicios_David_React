import { useState } from 'react';
import './ListaProductosFiltros.css';

const PRODUCTOS_INICIALES = [
  { id: 1, nombre: 'Teclado Mecánico', precio: 120 },
  { id: 2, nombre: 'Ratón Gaming', precio: 60 },
  { id: 3, nombre: 'Monitor 24"', precio: 200 },
  { id: 4, nombre: 'Alfombrilla', precio: 20 },
  { id: 5, nombre: 'Auriculares', precio: 80 },
];

function ListaProductosFiltros() {
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = PRODUCTOS_INICIALES.filter(prod => {
    return (
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <div className="productos-container">
      <div className="filtros">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <ul className="lista-productos">
        {productosFiltrados.map(prod => (
          <li key={prod.id}>
            <span>{prod.nombre}</span>
            <span className="precio">{prod.precio}€</span>
          </li>
        ))}
        {productosFiltrados.length === 0 && <p>No hay resultados.</p>}
      </ul>
    </div>
  );
}

export default ListaProductosFiltros;