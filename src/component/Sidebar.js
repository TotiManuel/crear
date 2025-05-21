import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();  // Usamos el hook useNavigate para redirección

  // Definir la función de manejo de cierre de sesión dentro del componente
  const handleLogout = () => {
    // Lógica para cerrar sesión, como limpiar el almacenamiento local
    console.log('Cerrando sesión...');
    // Limpiar almacenamiento local
    localStorage.removeItem('username'); // Si solo quieres eliminar el nombre de usuario
    localStorage.clear(); // Si quieres eliminar todo el almacenamiento local

    // Redirigir a la página de inicio de sesión usando el hook useNavigate
    navigate('/');  // Usamos navigate para redirigir
  };

  return (
    <nav id="sidebar" className="sidebar">
      <h2>Crear</h2>
      <ul>
        <li><Link to="/home">🏠 Inicio</Link></li>
        <li><Link to="/notificaciones">🔔 Notificaciones</Link></li>
        <li><Link to="/mensajes">💬 Mensajes</Link></li>
        <li><Link to="/compras">🛒 Compras</Link></li>
        <li><Link to="/ventas">📈 Ventas</Link></li>
        <li><Link to="/billetera">💳 Billetera</Link></li>
        {/* Usamos Link para Cerrar sesión, pero con un click handler */}
        <li>
          <Link to="/" onClick={handleLogout}>🚪 Cerrar sesión</Link>
        </li>
        <li><Link to="/proximamente">💳 Proximamente...</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;

