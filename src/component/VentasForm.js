import React, { useState } from 'react';
import { useVentas } from '../context/VentasContext'; // Importar el contexto

const VentasForm = () => {
  const { agregarVenta } = useVentas(); // Usamos la función para agregar ventas al contexto

  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  // Objeto con los productos y sus precios
  const productosPrecios = {
    'Producto 1': 100,
    'Producto 2': 200,
    'Producto 3': 300,
  };

  const handleProductoChange = (e) => {
    const selectedProducto = e.target.value;
    setProducto(selectedProducto);

    // Actualiza el precio automáticamente basado en el producto seleccionado
    if (productosPrecios[selectedProducto]) {
      setPrecio(productosPrecios[selectedProducto]);
    } else {
      setPrecio('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (producto && cantidad && precio) {
      const venta = { producto, cantidad, precio };
      agregarVenta(venta); // Llama a la función para agregar la venta
      setProducto('');
      setCantidad('');
      setPrecio('');
    }
  };

  return (
    <form id="ventasForm" onSubmit={handleSubmit}>
      <fieldset id="ventasFormFieldset">
        <legend id="ventasFormLegend">Ventas</legend>

        <label htmlFor="producto" id="productoLabel">Producto:</label>
        <select
          id="productoSelect"
          name="producto"
          value={producto}
          onChange={handleProductoChange}
          required
          className="form-input"
        >
          <option value="">Seleccione un producto</option>
          <option value="Producto 1">Producto 1</option>
          <option value="Producto 2">Producto 2</option>
          <option value="Producto 3">Producto 3</option>
        </select>

        <label htmlFor="cantidad" id="cantidadLabel">Cantidad:</label>
        <input
          type="number"
          id="cantidadInput"
          name="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
          className="form-input"
        />

        <label htmlFor="precio" id="precioLabel">Precio:</label>
        <input
          type="number"
          id="precioInput"
          name="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)} // Permite cambiar manualmente el precio
          required
          className="form-input"
          readOnly // Deshabilita la edición directa del precio, ya que se auto-llena
        />

        <button type="submit" id="submitVentaButton">Registrar Venta</button>
      </fieldset>
    </form>
  );
};

export default VentasForm;
