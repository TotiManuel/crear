import React from 'react';
import { useVentas } from '../context/VentasContext'; // Usamos el hook para obtener las ventas

const VentasList = () => {
  const { ventas, eliminarVenta } = useVentas();  // Obtenemos las ventas desde el contexto

  const username = localStorage.getItem('username'); // Obtenemos el usuario logueado

  if (!ventas || ventas.length === 0) {
    return (
      <div>
        <h3>No hay ventas registradas.</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Ventas</h2>
      <ul id="ventasBilleteraList">
        {ventas.map((venta, index) => (
          <li key={index} id="Productos">
            <div>
              <span><strong>Producto:</strong> {venta.producto}</span>
              <span><strong>Cantidad:</strong> {venta.cantidad} unidades</span>
              <span><strong>Precio por unidad:</strong> ${venta.precio}</span>
              <span><strong>Total:</strong> ${venta.cantidad * venta.precio}</span>
              {username === 'admin' && (
                <button 
                  onClick={() => eliminarVenta(index)} 
                  aria-label={`Eliminar venta de ${venta.producto}`} // Mejor accesibilidad
                >
                  Eliminar
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentasList;

