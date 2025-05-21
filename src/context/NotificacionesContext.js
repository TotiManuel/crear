import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
export const NotificacionesContext = createContext();

// Crear el provider
export const NotificacionesProvider = ({ children }) => {
  const [notificaciones, setNotificaciones] = useState([]);

  // Obtener el nombre del usuario desde localStorage
  const username = localStorage.getItem('username');

  // Recuperar notificaciones desde localStorage al cargar el componente
  useEffect(() => {
    const savedNotificaciones = localStorage.getItem('notificaciones');
    if (savedNotificaciones) {
      setNotificaciones(JSON.parse(savedNotificaciones));
    }
  }, []);

  // Función para agregar una notificación
  const addNotificacion = (notificacion) => {
    const nuevasNotificaciones = [...notificaciones, notificacion];
    setNotificaciones(nuevasNotificaciones);

    // Guardar las notificaciones en localStorage
    localStorage.setItem('notificaciones', JSON.stringify(nuevasNotificaciones));
  };

  // Función para eliminar una notificación (solo admin puede hacerlo)
  const removeNotificacion = (index) => {
    if (username !== 'admin') {
      alert('Solo el administrador puede eliminar notificaciones');
      return;
    }

    const nuevasNotificaciones = notificaciones.filter((_, i) => i !== index);
    setNotificaciones(nuevasNotificaciones);

    // Actualizar las notificaciones en localStorage
    localStorage.setItem('notificaciones', JSON.stringify(nuevasNotificaciones));
  };

  return (
    <NotificacionesContext.Provider value={{ notificaciones, addNotificacion, removeNotificacion }}>
      {children}
    </NotificacionesContext.Provider>
  );
};

// Hook personalizado para consumir el contexto de notificaciones
export const useNotificaciones = () => {
  const context = useContext(NotificacionesContext);
  if (!context) {
    throw new Error("useNotificaciones debe usarse dentro de un NotificacionesProvider");
  }
  return context;
};
