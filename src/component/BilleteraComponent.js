import React from 'react';
import { useVentas } from '../context/VentasContext'; // Importamos el hook para ventas
import { useCompras } from '../context/ComprasContext'; // Importamos el hook para compras
import VentasList from '../component/VentasList'; // Importamos el componente de VentasList
import ComprasList from '../component/ComprasList'; // Importamos el componente de ComprasList

const BilleteraComponent = () => {
  // Obtener las ventas y la función para agregar ventas desde el contexto
  const { agregarVenta } = useVentas();
  // Obtener las compras y la función para agregar compras desde el contexto
  const { agregarCompra } = useCompras();

  return (
    <main id="mainContent">
      <section id="billetera" className="billetera-section">
        <h1 id="billeteraTitle">Billetera</h1>
        <div id="billeteraContainer" className="billetera-container">
          {/* Columna de Ventas */}
          <div id="ventasColumn" className="ventas">
            <h2 id="ventasTitle">Ventas</h2>
            {/* Aquí usamos el componente VentasList */}
            <VentasList id="ventasList" />
          </div>

          {/* Columna de Compras */}
          <div id="comprasColumn" className="compras">
            <h2 id="comprasTitle">Compras</h2>
            {/* Aquí usamos el componente ComprasList */}
            <ComprasList id="comprasList" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BilleteraComponent;
