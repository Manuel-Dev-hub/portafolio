// src/components/Blog.js
import React, { useState } from 'react';
import './Blog.css';
import Modal from './Modal'; // Importa el componente Modal

// Importa las imágenes
import blogImage1 from '../assets/images/blog-image1.jpg';
import blogImage2 from '../assets/images/blog-image2.jpg';
import blogImage3 from '../assets/images/blog-image3.jpg';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      title: 'Tendencias en Desarrollo Web 2024',
      excerpt: 'Descubre las últimas tendencias en desarrollo web para el próximo año y cómo pueden impactar en tu negocio.',
      date: '01 de enero, 2024',
      content: 'Con la llegada de nuevas tecnologías, el desarrollo web sigue evolucionando rápidamente. En 2024, la inteligencia artificial, el diseño centrado en el usuario y el rendimiento óptimo serán factores clave en el éxito de un sitio web. Aprender a adaptarse a estas tendencias y adoptarlas en tu flujo de trabajo será crucial para destacar frente a la competencia.',
      image: blogImage1,
      link: 'https://css-tricks.com' // Enlace a un blog popular sobre desarrollo web
    },
    {
      title: 'Mejores Prácticas para Optimización SEO',
      excerpt: 'Aprende las técnicas más efectivas para mejorar el SEO de tu sitio web y atraer más tráfico orgánico.',
      date: '15 de diciembre, 2023',
      content: 'El SEO sigue siendo una parte fundamental para el éxito de cualquier negocio en línea. En esta guía, exploramos las mejores prácticas de SEO en 2024, incluyendo el enfoque en la calidad del contenido, la optimización para dispositivos móviles y la importancia de la velocidad de carga. Implementar estas técnicas puede ayudarte a mejorar tu clasificación en los motores de búsqueda y a atraer más tráfico orgánico.',
      image: blogImage2,
      link: 'https://moz.com/blog' // Enlace a un blog popular sobre SEO
    },
    {
      title: 'Introducción a la UX/UI para Principiantes',
      excerpt: 'Una guía completa para principiantes en UX/UI, con consejos prácticos y recursos útiles.',
      date: '30 de noviembre, 2023',
      content: 'Entender los principios básicos de UX y UI es esencial para diseñar experiencias de usuario efectivas. En este artículo, cubrimos los conceptos clave, desde la investigación de usuarios hasta el diseño de interfaces intuitivas. Con esta guía, aprenderás cómo mejorar la experiencia de los visitantes de tu sitio web, aumentando la retención y satisfacción de los usuarios.',
      image: blogImage3,
      link: 'https://uxdesign.cc' // Enlace a un blog popular sobre UX/UI
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="blog-section">
      <h2>Blog</h2>
      <p>Lee mis últimos artículos y publicaciones.</p>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <button onClick={() => openModal(post)} className="blog-link">Leer más</button>
          </div>
        ))}
      </div>

      {/* Modal para mostrar el contenido completo */}
      {selectedPost && (
        <Modal closeModal={closeModal}>
          <img src={selectedPost.image} alt={selectedPost.title} className="modal-image" />
          <h2>{selectedPost.title}</h2>
          <p className="blog-date">{selectedPost.date}</p>
          <p>{selectedPost.content}</p>
          <button
            onClick={() => window.open(selectedPost.link, '_blank')}
            className="external-link-btn"
          >
            Clic para leer más
          </button>
        </Modal>
      )}
    </section>
  );
};

export default Blog;
