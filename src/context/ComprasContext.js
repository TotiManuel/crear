import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto
const ComprasContext = createContext();

// Componente proveedor
export const ComprasProvider = ({ children }) => {
  const [compras, setCompras] = useState([]);
  const [usuario, setUsuario] = useState(localStorage.getItem('username'));

  // Cargar compras desde localStorage
  useEffect(() => {
    const comprasGuardadas = localStorage.getItem('compras');
    if (comprasGuardadas) {
      setCompras(JSON.parse(comprasGuardadas));
    }
  }, []);

  // Función para agregar una compra
  const agregarCompra = (compra) => {
    const nuevasCompras = [...compras, compra];
    setCompras(nuevasCompras);
    localStorage.setItem('compras', JSON.stringify(nuevasCompras));
  };

  // Función para eliminar una compra (solo admin)
  const eliminarCompra = (index) => {
    if (usuario !== 'admin') {
      alert('Solo el usuario admin puede eliminar compras');
      return;
    }

    const comprasRestantes = compras.filter((_, i) => i !== index);
    setCompras(comprasRestantes);
    localStorage.setItem('compras', JSON.stringify(comprasRestantes));
  };

  return (
    <ComprasContext.Provider value={{ compras, agregarCompra, eliminarCompra }}>
      {children}
    </ComprasContext.Provider>
  );
};

// Hook para acceder al contexto
export const useCompras = () => useContext(ComprasContext);
