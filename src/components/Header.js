import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faAward, faEnvelope, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleTheme, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 468);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 468);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (isMobileView) {
      setIsMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
    }
  };

  return (
    <header className="header">
      <h1 className="header-title">
        {isSmallScreen ? 'Bienvenido' : 'Bienvenido a Mi Portafolio'}
      </h1>
      <button
        className={`menu-toggle ${darkMode ? 'dark-mode-button' : ''}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`nav-bar ${isScrolled ? 'fixed' : ''} ${isMenuOpen ? 'open' : ''} ${darkMode ? 'dark-mode-nav' : ''}`}>
        <a href="#projects" onClick={handleNavLinkClick}>
          <FontAwesomeIcon icon={faHome} /> Proyectos
        </a>
        <a href="#recognition" onClick={handleNavLinkClick}>
          <FontAwesomeIcon icon={faAward} /> Reconocimientos
        </a>
        <a href="#skills" onClick={handleNavLinkClick}>
          <FontAwesomeIcon icon={faTools} /> Habilidades
        </a>
        <a href="#testimonials" onClick={handleNavLinkClick}>
          <FontAwesomeIcon icon={faEnvelope} /> Testimonios
        </a>
        <a href="#about-me" onClick={handleNavLinkClick}>
          <FontAwesomeIcon icon={faUser} /> Sobre Mí
        </a>
        <a href="#contact" onClick={handleNavLinkClick}>
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
