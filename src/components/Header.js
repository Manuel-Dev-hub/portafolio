import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faAward, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "Bienvenido a Mi Portafolio";

  useEffect(() => {
    // Animación de escritura
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    // Desplazarse al header al cargar la página
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">{text}</h1>
      <nav className="nav-bar">
        <a href="#projects"><FontAwesomeIcon icon={faHome} /> Proyectos</a>
        <a href="#about-me"><FontAwesomeIcon icon={faUser} /> Sobre Mí</a>
        <a href="#skills"><FontAwesomeIcon icon={faTools} /> Habilidades</a>
        <a href="#recognition"><FontAwesomeIcon icon={faAward} /> Reconocimientos</a>
        <a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contacto</a>
      </nav>
      <p className="introduction">
        Soy Manuel Antonio Rios Cardona, apasionado por la tecnología y el desarrollo web,
        con 1 año y medio de experiencia creando herramientas digitales para potenciar el crecimiento de las empresas.
      </p>
    </header>
  );
};

export default Header;
