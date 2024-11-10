// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

// Importa las imágenes
import ecommerceImage from '../assets/images/ecommerce.jpg';
import constructoraImage from '../assets/images/constructora.jpg';
import peluqueriaImage from '../assets/images/peluqueria.jpg';

const Projects = () => {
  const projectList = [
    {
      title: 'Plataforma E-commerce para Servicios Web',
      description: 'Sistema integral para la venta de sitios web y soluciones digitales, con catálogo de servicios, pasarela de pagos segura y secciones informativas personalizables.',
      image: ecommerceImage,
      link: 'https://www.18s.tech/', // Enlace al sitio de e-commerce
    },
    {
      title: 'Portal Corporativo para Empresa Constructora',
      description: 'Sitio web profesional para una constructora, con portafolio de proyectos, detalles de servicios y formularios de contacto optimizados.',
      image: constructoraImage,
      link: 'https://monroystrucking.com/', // Enlace al sitio de la constructora
    },
    {
      title: 'Website para Estilistas y Peluquerías',
      description: 'Plataforma moderna para peluquería con funcionalidades de reserva en línea, galería de servicios y testimonios de clientes.',
      image: peluqueriaImage,
      link: 'http://miriamreyes.site/', // Enlace al sitio de la peluquería
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos Destacados</h2>
      <p>Explora algunos de los proyectos que he desarrollado, diseñados para resolver problemas reales.</p>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-footer">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver más</a>
              <div className="tech-icons">
                <FaReact title="React" className="icon react-icon" />
                <FaJsSquare title="JavaScript" className="icon js-icon" />
                <SiTailwindcss title="Tailwind CSS" className="icon tailwind-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
