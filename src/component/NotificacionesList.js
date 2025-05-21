import React from 'react';
import { useNotificaciones } from '../context/NotificacionesContext'; // Importamos el hook

const NotificacionesList = () => {
  const { notificaciones, removeNotificacion } = useNotificaciones(); // Usamos el hook para obtener las notificaciones y la función de eliminación

  // Obtener el nombre de usuario desde localStorage
  const username = localStorage.getItem('username');

  if (!notificaciones || notificaciones.length === 0) {
    return (
      <div id="noNotificacionesContainer">
        <h2 id="noNotificacionesTitle">Lista de Notificaciones</h2>
        <p id="noNotificacionesText">No hay notificaciones registradas.</p>
      </div>
    );
  }

  return (
    <div id="notificacionesListContainer">
      <h2 id="notificacionesListTitle">Lista de Notificaciones</h2>
      <ul id="notificacionesList">
        {notificaciones.map((notificacion, index) => (
          <li key={index} id={`notificacionItem-${index}`} className="notificacion-item">
            <p id={`notificacionText-${index}`} className="notificacion-text">{notificacion}</p>
            {/* Mostrar el botón de eliminar solo si el usuario es admin */}
            {username === 'admin' && (
              <button
                id={`eliminarNotificacionButton-${index}`}
                className="eliminar-notificacion-button"
                onClick={() => removeNotificacion(index)}
              >
                Eliminar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificacionesList;

