import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import MensajesPage from './pages/MensajesPage'; 
import Login from './component/LoginComponent'; 
import NotificacionesPage from './pages/NotificacionesPage';
import ComprasPage from './pages/ComprasPage';
import VentasPage from './pages/VentasPage';
import BilleteraPage from './pages/BilleteraPage';
import { NotificacionesProvider } from './context/NotificacionesContext'; // Asegúrate de importar el provider
import { ComprasProvider } from './context/ComprasContext'; // Asegúrate de importar el contexto
import { VentasProvider } from './context/VentasContext';
import ProximamentePage from './pages/ProximamentePage';

function App() {
  return (
    <BrowserRouter basename="/crear">
      <NotificacionesProvider>
        <ComprasProvider>
          <VentasProvider>
              <Router>
                <div className="container">
                  <div>
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
                </div>
              </Router>
            </VentasProvider>
        </ComprasProvider>
      </NotificacionesProvider>
    </BrowserRouter>
  );
}

export default App;
