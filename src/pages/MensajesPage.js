import React, { useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import MensajesForm from '../component/MensajesForm';
import MensajesList from '../component/MensajesList';

const MensajesPage = () => {
  const [mensajes, setMensajes] = useState([]);
  const username = localStorage.getItem('username'); // Obtener el nombre del usuario

  // Cargar los mensajes desde localStorage al cargar la página
  useEffect(() => {
    const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes')) || [];
    setMensajes(mensajesGuardados);
  }, []);

  // Manejar el envío de un nuevo mensaje
  const handleMensaje = (mensajeTexto, destinatario) => {
    const nuevoMensaje = { 
      texto: mensajeTexto, 
      destinatario, 
      remitente: username // Guardar el usuario que envió el mensaje
    };

    const nuevosMensajes = [...mensajes, nuevoMensaje];
    
    // Guardar los mensajes en localStorage
    localStorage.setItem('mensajes', JSON.stringify(nuevosMensajes));

    // Actualizar el estado de los mensajes en React
    setMensajes(nuevosMensajes);
  };

  // Manejar la eliminación de un mensaje
  const handleEliminarMensaje = (index) => {
    const mensajesActualizados = mensajes.filter((_, i) => i !== index);
    localStorage.setItem('mensajes', JSON.stringify(mensajesActualizados));
    setMensajes(mensajesActualizados);
  };

  return (
    <div>
      <Sidebar />
      <MensajesList mensajes={mensajes} handleEliminar={handleEliminarMensaje} />
      {username && <MensajesForm handleMensaje={handleMensaje} />}
    </div>
  );
};

export default MensajesPage;
