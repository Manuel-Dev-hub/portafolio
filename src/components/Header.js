import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faAward, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleTheme, darkMode }) => {
  const [clicked, setClicked] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (link) => {
    setClicked(link);
    setTimeout(() => setClicked(null), 200);
  };

  return (
    <header className="header">
      <h1 className="header-title">Bienvenido a Mi Portafolio</h1>
      <nav className={`nav-bar ${isScrolled ? 'fixed' : ''}`}>
        <a href="#projects" onClick={() => handleClick('projects')}>
          <FontAwesomeIcon icon={faHome} /> Proyectos
        </a>
        <a href="#about-me" onClick={() => handleClick('about-me')}>
          <FontAwesomeIcon icon={faUser} /> Sobre Mí
        </a>
        <a href="#skills" onClick={() => handleClick('skills')}>
          <FontAwesomeIcon icon={faTools} /> Habilidades
        </a>
        <a href="#recognition" onClick={() => handleClick('recognition')}>
          <FontAwesomeIcon icon={faAward} /> Reconocimientos
        </a>
        <a href="#testimonials" onClick={() => handleClick('testimonials')}>
          <FontAwesomeIcon icon={faEnvelope} /> Testimonios
        </a>
        <a href="#contact" onClick={() => handleClick('contact')}>
          <FontAwesomeIcon icon={faEnvelope} /> Contacto
        </a>
        <button className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </nav>
      <p className="introduction">
        Soy Manuel Antonio Rios Cardona, apasionado por la tecnología y el desarrollo web, con 1 año y medio de experiencia creando herramientas digitales para potenciar el crecimiento de las empresas.
      </p>
    </header>
  );
};

export default Header;
