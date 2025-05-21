import React from 'react';
import Sidebar from '../component/Sidebar';
import VentasForm from '../component/VentasForm';
import VentasList from '../component/VentasList';
import { VentasProvider } from '../context/VentasContext';  // Importamos el provider

const VentasPage = () => {
  return (
    <VentasProvider>
      <div>
        <Sidebar />
        <VentasForm />
        <VentasList />
      </div>
    </VentasProvider>
  );
};

export default VentasPage;


 