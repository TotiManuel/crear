import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import MensajesPage from './pages/MensajesPage'; 
import Login from './component/LoginComponent'; 
import NotificacionesPage from './pages/NotificacionesPage';
import ComprasPage from './pages/ComprasPage';
import VentasPage from './pages/VentasPage';
import BilleteraPage from './pages/BilleteraPage';
import { NotificacionesProvider } from './context/NotificacionesContext';
import { ComprasProvider } from './context/ComprasContext';
import { VentasProvider } from './context/VentasContext';
import ProximamentePage from './pages/ProximamentePage';

function App() {
  return (
    <BrowserRouter basename="/crear">
      <NotificacionesProvider>
        <ComprasProvider>
          <VentasProvider>
            <div className="container">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/mensajes" element={<MensajesPage />} />
                <Route path="/notificaciones" element={<NotificacionesPage />} />
                <Route path="/compras" element={<ComprasPage />} />
                <Route path="/ventas" element={<VentasPage />} />
                <Route path="/billetera" element={<BilleteraPage />} />
                <Route path="/proximamente" element={<ProximamentePage />} />
              </Routes>
            </div>
          </VentasProvider>
        </ComprasProvider>
      </NotificacionesProvider>
    </BrowserRouter>
  );
}

export default App;
