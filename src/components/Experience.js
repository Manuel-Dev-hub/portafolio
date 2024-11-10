// src/components/Experience.js
import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.experience-item');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2>Mi Experiencia</h2>
      <div className="experience-content">
        <div className="timeline">
          <div className="experience-item">
            <h3>Agosto 2024 - Actualidad: Director y CEO de 18s Technologies</h3>
            <p>
              Lidero un equipo en desarrollo de software y sitios web, impulsando la expansión de 18s Technologies y manteniendo altos estándares de calidad y atención al cliente.
            </p>
          </div>
          <div className="experience-item">
            <h3>Junio 2024 - Agosto 2024: Desarrollador Web Full Stack en 18s Technologies</h3>
            <p>
              Colaboré en el desarrollo de aplicaciones web y plataformas e-commerce, usando tecnologías como React, Node.js, MongoDB y MySQL.
            </p>
          </div>
          <div className="experience-item">
            <h3>Mayo 2024: Participación en Hackathones</h3>
            <p>
              Competí en tres hackathones y obtuve el <strong>1er lugar en uno</strong>, demostrando habilidades en resolución de problemas y trabajo en equipo.
            </p>
          </div>
          <div className="experience-item">
            <h3>Noviembre 2023 - Mayo 2024: Freelancer Independiente</h3>
            <p>
              Realicé proyectos de desarrollo web personalizados, ganando experiencia práctica y fortaleciendo mis habilidades técnicas en el proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
