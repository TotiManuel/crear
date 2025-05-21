import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto de ventas
const VentasContext = createContext();

export const useVentas = () => {
  return useContext(VentasContext);
};

export const VentasProvider = ({ children }) => {
  const [ventas, setVentas] = useState([]);

  // Cargar las ventas desde localStorage si están disponibles
  useEffect(() => {
    const storedVentas = JSON.parse(localStorage.getItem('ventas'));
    if (storedVentas) {
      setVentas(storedVentas);
    }
  }, []);

  // Función para agregar una venta
  const agregarVenta = (venta) => {
    const updatedVentas = [...ventas, venta];
    setVentas(updatedVentas);
    localStorage.setItem('ventas', JSON.stringify(updatedVentas));
  };

  // Función para eliminar una venta
  const eliminarVenta = (index) => {
    const updatedVentas = ventas.filter((_, i) => i !== index);
    setVentas(updatedVentas);
    localStorage.setItem('ventas', JSON.stringify(updatedVentas));
  };

  return (
    <VentasContext.Provider value={{ ventas, agregarVenta, eliminarVenta }}>
      {children}
    </VentasContext.Provider>
  );
};
