import React, { useState } from 'react';
import { useNotificaciones } from '../context/NotificacionesContext'; // Importamos el hook

const NotificacionesForm = () => {
  const [notificacion, setNotificacion] = useState('');
  const { addNotificacion } = useNotificaciones(); // Usamos el hook para obtener la función

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función 'addNotificacion' para pasar la nueva notificación
    if (notificacion.trim()) {
      addNotificacion(notificacion); // Usamos addNotificacion del contexto
      setNotificacion(''); // Limpia el formulario
    }
  };

  return (
    <form id="notificacionesForm" onSubmit={handleSubmit}>
      <fieldset id="notificacionesFieldset">
        <legend id="notificacionesLegend">Notificaciones</legend>
        <label htmlFor="notificacion" id="notificacionLabel">Nueva Notificación:</label>
        <input 
          type="text" 
          id="notificacionInput" 
          name="notificacion" 
          value={notificacion} 
          onChange={(e) => setNotificacion(e.target.value)} 
          required 
          className="input-field"
        />
        <button id="saveNotificationButton" type="submit">Guardar Notificación</button>
      </fieldset>
    </form>
  );
};

export default NotificacionesForm;

