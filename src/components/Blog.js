// src/components/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Tendencias en Desarrollo Web 2024',
      excerpt: 'Descubre las últimas tendencias en desarrollo web para el próximo año y cómo pueden impactar en tu negocio.',
      date: '01 de enero, 2024',
      link: '#',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Mejores Prácticas para Optimización SEO',
      excerpt: 'Aprende las técnicas más efectivas para mejorar el SEO de tu sitio web y atraer más tráfico orgánico.',
      date: '15 de diciembre, 2023',
      link: '#',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Introducción a la UX/UI para Principiantes',
      excerpt: 'Una guía completa para principiantes en UX/UI, con consejos prácticos y recursos útiles.',
      date: '30 de noviembre, 2023',
      link: '#',
      image: 'https://via.placeholder.com/300',
    },
  ];

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
            <a href={post.link} className="blog-link">Leer más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
