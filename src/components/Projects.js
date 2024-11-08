import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'E-commerce Web',
      description: 'Plataforma para vender productos en línea con integración de pasarela de pagos.',
      image: 'ecommerce.jpg',
      link: '#',
    },
    {
      title: 'Sistema de Gestión',
      description: 'Aplicación para manejar inventarios y generar reportes de ventas.',
      image: 'inventory.jpg',
      link: '#',
    },
    {
      title: 'Blog Personal',
      description: 'Blog optimizado para SEO con diseño responsivo y contenido dinámico.',
      image: 'blog.jpg',
      link: '#',
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
            <a href={project.link} className="project-link">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
