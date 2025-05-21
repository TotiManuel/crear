import React, { useState } from 'react';
import { useCompras } from '../context/ComprasContext';

const ComprasForm = () => {
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const { agregarCompra } = useCompras();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (producto && cantidad && precio) {
      const compra = { producto, cantidad, precio };
      agregarCompra(compra); // Llama a la función para agregar la compra
      setProducto('');
      setCantidad('');
      setPrecio('');
    }
  };

  return (
    <form id="comprasForm" onSubmit={handleSubmit}>
      <fieldset id="comprasFieldset">
        <legend id="comprasLegend">Compras</legend>
        <label htmlFor="producto" id="productoLabel">Producto:</label>
        <input
          type="text"
          id="productoInput"
          name="producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
          className="input-field"
        />
        <label htmlFor="cantidad" id="cantidadLabel">Cantidad:</label>
        <input
          type="number"
          id="cantidadInput"
          name="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
          className="input-field"
        />
        <label htmlFor="precio" id="precioLabel">Precio:</label>
        <input
          type="number"
          id="precioInput"
          name="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" id="comprasSubmitButton">Registrar Compra</button>
      </fieldset>
    </form>
  );
};

export default ComprasForm;
