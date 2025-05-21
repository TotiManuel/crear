import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styleLogin.css';

const Login = () => {
  // Estado para manejar el formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Credenciales de ejemplo (en un caso real, esto sería verificado con una API)
  const users = [
    { username: 'admin', password: 'admin' },
    { username: 'pao', password: 'pao' },
    { username: 'ina', password: 'ina' }
  ];

  // Función para manejar el submit
  const handleLogin = (e) => {
    e.preventDefault();

    // Elimina los espacios antes y después de las entradas
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // Verificación de las credenciales
    const user = users.find(
      (user) => user.username === trimmedUsername && user.password === trimmedPassword
    );

    if (user) {
      // Almacenamos el nombre de usuario en localStorage
      localStorage.setItem('username', trimmedUsername);
      // Redirigimos al usuario a la página de inicio
      navigate('/home');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div id="loginContainer" className="login-container">
      <h2 id="loginTitle">Iniciar Sesión</h2>
      <form id="loginForm" onSubmit={handleLogin}>
        <div id="usernameField">
          <label htmlFor="username" id="usernameLabel">Usuario:</label>
          <input
            type="text"
            id="usernameInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div id="passwordField">
          <label htmlFor="password" id="passwordLabel">Contraseña:</label>
          <input
            type="password"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button id="submitButton" type="submit">Iniciar Sesión</button>
        {error && <p id="errorMessage" style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
