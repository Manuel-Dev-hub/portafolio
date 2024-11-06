import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faAward, faEnvelope, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleTheme, darkMode }) => {
  const [clicked, setClicked] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 468);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 468);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (link) => {
    setClicked(link);
    setTimeout(() => setClicked(null), 200);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">{isMobileView ? 'Bienvenido' : 'Bienvenido a Mi Portafolio'}</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`nav-bar ${isScrolled ? 'fixed' : ''} ${isMenuOpen ? 'open' : ''}`}>
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
    </header>
  );
};

export default Header;
