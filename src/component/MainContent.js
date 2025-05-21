import React from 'react';
import InicioForm from './InicioForm';

const MainContent = () => {
  return (
    <main id="mainContent">
      <section id="inicioSection">
        <h1 id="inicioTitle">Bienvenido a Crear</h1>
        <p id="inicioDescription">Este es el inicio de tu panel de control.</p>
        <InicioForm id="inicioForm" />
      </section>
    </main>
  );
};

export default MainContent;
