import React from "react";
import ReactDOM from "react-dom";
import "./index.css";  // Si tienes este archivo CSS
import App from "./App";  // Importa el componente App
import { BrowserRouter } from "react-router-dom";  // Si estás usando React Router

// Renderiza el componente App dentro del div con id 'root'
ReactDOM.render(
  <BrowserRouter basename="/crear">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
