import React from 'react';

const MensajesList = ({ mensajes, handleEliminar }) => {
  const username = localStorage.getItem('username'); // Obtener el nombre del usuario

  // Filtrar los mensajes que le pertenecen al usuario actual
  const mensajesFiltrados = mensajes.filter((mensaje) => mensaje.destinatario === username);

  if (mensajesFiltrados.length === 0) {
    return (
      <div id="noMessagesContainer">
        <h2 id="noMessagesTitle">Lista de Mensajes Recibidos</h2>
        <p id="noMessagesText">No tienes mensajes.</p>
      </div>
    );
  }

  return (
    <div id="mensajesListContainer">
      <h2 id="mensajesListTitle">Lista de Mensajes Recibidos</h2>
      <ul id="mensajesList">
        {mensajesFiltrados.map((mensaje, index) => (
          <li key={index} id={`mensajeItem-${index}`} className="mensaje-item">
            <p id={`remitente-${index}`} className="mensaje-remitente"><strong>De:</strong> {mensaje.remitente}</p>
            <p id={`mensajeTexto-${index}`} className="mensaje-texto"><strong>Mensaje:</strong> {mensaje.texto}</p>
            <button
              id={`eliminarMensajeButton-${index}`}
              className="eliminar-button"
              onClick={() => handleEliminar(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MensajesList;
