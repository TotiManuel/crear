import React from 'react';
import { useCompras } from '../context/ComprasContext'; // Usamos el hook para obtener las compras

const ComprasList = () => {
  const { compras, eliminarCompra } = useCompras();  // Obtenemos las compras desde el contexto

  const username = localStorage.getItem('username'); // Obtenemos el usuario logueado

  if (!compras || compras.length === 0) {
    return (
      <div id="noComprasMessage">
        <h3 id="noComprasTitle">No hay compras registradas.</h3>
      </div>
    );
  }

  return (
    <ul id="comprasList">
      {compras.map((compra, index) => (
        <li key={index} id={`compraItem-${index}`} className="compra-item">
          <span id={`producto-${index}`} className="compra-producto">{compra.producto}</span> - 
          <span id={`cantidad-${index}`} className="compra-cantidad">{compra.cantidad}</span> unidades - 
          Precio por unidad: <span id={`precio-${index}`} className="compra-precio">${compra.precio}</span> - 
          Total: <span id={`total-${index}`} className="compra-total">${compra.cantidad * compra.precio}</span>
          {username === 'admin' && (
            <button id={`eliminarCompra-${index}`} className="eliminar-button" onClick={() => eliminarCompra(index)}>Eliminar</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ComprasList;
