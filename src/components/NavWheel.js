import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import './NavWheel.css';
import animationData from '../animations/animation.json';

const NavWheel = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    // Desplazar automáticamente a la sección del robot al cargar la página sin animación
    const element = document.getElementById("robot-section");
    if (element) {
      const elementPosition = element.offsetTop;
      window.scrollTo({ top: elementPosition, behavior: "auto" });
    }
  }, []);

  const welcomeMessage = "¡Bienvenido al portafolio de Manuel! Explora sus proyectos y habilidades haciendo clic en los botones.";

  return (
    <div id="robot-section" className="nav-wheel">
      <div className="rotating-wheel">
        <svg className="outer-circle" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="250" fill="none" stroke="#ffffff" strokeWidth="4" />
        </svg>

        <a href="#projects" className="nav-button">Proyectos</a>
        <a href="#recognition" className="nav-button">Reconocimientos</a>
        <a href="#testimonials" className="nav-button">Testimonios</a>
        <a href="#contact" className="nav-button">Contacto</a>
        <a href="#blog" className="nav-button">Blog</a>
        <a href="#about-me" className="nav-button">Sobre</a>
        <a href="#skills" className="nav-button">Habilidades</a>
      </div>

      <div className="robot">
        <Lottie options={defaultOptions} height={250} width={250} />
        
        <div className="welcome-message">
          {welcomeMessage.split("").map((char, index) => (
            <span key={index} className="typing-letter" style={{ animationDelay: `${index * 0.05}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavWheel;
