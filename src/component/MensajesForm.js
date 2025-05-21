import React, { useState } from 'react';

const MensajesForm = ({ handleMensaje }) => {
  const [mensaje, setMensaje] = useState('');
  const [destinatario, setDestinatario] = useState('');

  const usuarios = ['admin', 'pao', 'ina']; // Lista de usuarios disponibles
  const [usuario, setUsuario] = useState(localStorage.getItem('username'));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim() && destinatario) {
      handleMensaje(mensaje, destinatario); // Enviar mensaje con el destinatario
      setMensaje(''); // Limpiar el mensaje
      setDestinatario(''); // Limpiar el destinatario
    }
  };

  return (
    <form id="mensajesForm" onSubmit={handleSubmit}>
      <fieldset id="mensajesFieldset">
        <legend id="mensajesLegend">Enviar Mensaje</legend>
        <label htmlFor="mensaje" id="mensajeLabel">Nuevo Mensaje:</label>
        <br />
        <textarea
          id="mensajeInput"
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          className="input-textarea"
        ></textarea>
        <br />
        <br />
        <label htmlFor="destinatario" id="destinatarioLabel">Enviar a:</label>
        <br />
        <select
          id="destinatarioSelect"
          name="destinatario"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
          required
          className="input-select"
        >
          <option value="">Selecciona un usuario</option>
          {usuarios
            .filter((usuario) => usuario !== localStorage.getItem('username')) // Filtramos el usuario actual
            .map((usuario) => (
              <option key={usuario} value={usuario} id={`destinatarioOption-${usuario}`}>
                {usuario}
              </option>
            ))
          }
        </select>
        <br />
        <br />
        <button id="submitButton" type="submit">Enviar Mensaje</button>
      </fieldset>
    </form>
  );
};

export default MensajesForm;
