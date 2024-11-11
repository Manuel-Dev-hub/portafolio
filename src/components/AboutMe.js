// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/perfil.jpg'; // Importa la imagen de perfil

const AboutMe = () => {
  return (
    <section id="about-me" className="about-section">
      <h2>Sobre Mí</h2>
      <p>Soy un desarrollador Full Stack con pasión por crear soluciones innovadoras y efectivas.</p>
      <div className="about-content">
        <div className="about-text">
          <p>
            Con un año de experiencia en desarrollo web, he trabajado en proyectos de e-commerce, aplicaciones empresariales y sitios personalizados. Mi enfoque está en construir productos escalables que mejoren la experiencia del usuario.
          </p>
          <p>
            Mis habilidades abarcan tecnologías como React, Node.js, MongoDB, y mucho más. Me gusta colaborar con otros profesionales para resolver problemas complejos y crear soluciones robustas.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Perfil" /> {/* Usa la imagen importada */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
