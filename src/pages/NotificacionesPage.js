import React, { useContext } from 'react';
import Sidebar from '../component/Sidebar';
import NotificacionesForm from '../component/NotificacionesForm';
import NotificacionesList from '../component/NotificacionesList';
import { NotificacionesContext } from '../context/NotificacionesContext'; // Importa el contexto

const NotificacionesPage = () => {
  // Accede al contexto
  const { notificaciones, addNotificacion } = useContext(NotificacionesContext);

  // Obtener el nombre de usuario desde localStorage
  const username = localStorage.getItem('username');

  return (
    <div>
      <Sidebar />
      <NotificacionesList notificaciones={notificaciones} />
      {username === 'admin' && <NotificacionesForm handleNotificacion={addNotificacion} />}
    </div>
  );
};

export default NotificacionesPage;

