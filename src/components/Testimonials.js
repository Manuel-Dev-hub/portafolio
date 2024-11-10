// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';
import LazyLoad from 'react-lazyload';

import mariaImage from '../assets/images/maria-gonzalez.jpg';
import juanImage from '../assets/images/juan-perez.jpg';
import lauraImage from '../assets/images/laura-rodriguez.jpg';

const Testimonials = () => {
  const testimonialsList = [
    {
      name: 'María González',
      role: 'CEO de Innovatech',
      feedback: 'Trabajar con Manuel fue una experiencia increíble. Su enfoque innovador y su atención al detalle llevaron nuestro proyecto al siguiente nivel.',
      image: mariaImage,
    },
    {
      name: 'Juan Pérez',
      role: 'CTO de Web Solutions',
      feedback: 'Manuel es un desarrollador altamente competente. Su habilidad para resolver problemas complejos y entregar resultados de alta calidad es impresionante.',
      image: juanImage,
    },
    {
      name: 'Laura Rodríguez',
      role: 'Directora de Marketing en Digital Future',
      feedback: 'Manuel tiene una habilidad única para entender las necesidades del cliente y traducirlas en soluciones prácticas y efectivas. Lo recomiendo ampliamente.',
      image: lauraImage,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonios</h2>
      <p>Lee lo que otros dicen sobre mi trabajo.</p>
      <div className="testimonials-grid">
        {testimonialsList.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <LazyLoad height={80} offset={200} placeholder={<div className="image-placeholder" />}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
                srcSet={`${testimonial.image} 1x, ${testimonial.image} 2x`} // Para alta resolución en pantallas retina
                loading="lazy"
              />
            </LazyLoad>
            <h3>{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
