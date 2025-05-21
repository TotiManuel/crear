import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import '../styles/styleIndex.css';
import FooterComponent from '../component/FooterComponent';

const HomePage = () => {
  const navigate = useNavigate();

  // Obtener el nombre de usuario desde localStorage
  const username = localStorage.getItem('username');

  // Obtener los accesos directos desde localStorage
  const getShortcutsFromStorage = () => {
    const savedShortcuts = localStorage.getItem('shortcuts');
    return savedShortcuts ? JSON.parse(savedShortcuts) : [];
  };

  const [shortcuts, setShortcuts] = useState(getShortcutsFromStorage());
  const [newShortcut, setNewShortcut] = useState('');
  const [newShortcutName, setNewShortcutName] = useState('');

  useEffect(() => {
    // Si no hay usuario, redirigir a la página de login
    if (!username) {
      navigate('/');
    }
  }, [username, navigate]);

  // Función para agregar un nuevo acceso directo
  const addShortcut = () => {
    if (newShortcut && newShortcutName) {
      const updatedShortcuts = [...shortcuts, { name: newShortcutName, link: newShortcut }];
      setShortcuts(updatedShortcuts);
      localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
      setNewShortcut('');
      setNewShortcutName('');
    }
  };
// Función para obtener el favicon de una URL
const getFavicon = (url) => {
  const urlObject = new URL(url);
  return `${urlObject.protocol}//${urlObject.hostname}/favicon.ico`;
};



  // Función para eliminar un acceso directo
  const deleteShortcut = (index) => {
    const updatedShortcuts = shortcuts.filter((_, i) => i !== index);
    setShortcuts(updatedShortcuts);
    localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
  };

  return (
    <div>
      <Sidebar />
<h1>
  {username === 'pao' || username === 'ina' 
    ? `Bienvenida, ${username}` 
    : (username === 'admin' || username === 'toti' 
      ? `Bienvenido, ${username}` 
      : `Bienvenido, Usuario`)}
</h1>

      <p>Esta es tu página principal.</p>
      <div className="shortcut-section">
        <h2>Mis Accesos Directos</h2>
        <form>
          <input
            type="text"
            placeholder="Nombre del acceso directo"
            value={newShortcutName}
            onChange={(e) => setNewShortcutName(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL del acceso directo"
            value={newShortcut}
            onChange={(e) => setNewShortcut(e.target.value)}
          />
          <button
            type="button"
            className="add-shortcut-btn"
            onClick={addShortcut}
          >
            Agregar Acceso Directo
          </button>
        </form>
        <ul>
          {shortcuts.map((shortcut, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
            src={getFavicon(shortcut.link)} 
            alt="Favicon" 
            style={{ width: '20px', height: '20px', marginRight: '10px' }} 
            />
            <Link to={shortcut.link}>{shortcut.name}</Link> {/* Enlace */}
            <button onClick={() => deleteShortcut(index)} style={{ marginLeft: '10px' }}>Eliminar</button>
          </li>
          ))}
        </ul>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
