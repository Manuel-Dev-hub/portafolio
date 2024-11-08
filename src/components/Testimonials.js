// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsList = [
    {
      name: 'María González',
      role: 'CEO de Innovatech',
      feedback: 'Trabajar con Manuel fue una experiencia increíble. Su enfoque innovador y su atención al detalle llevaron nuestro proyecto al siguiente nivel.',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Juan Pérez',
      role: 'CTO de Web Solutions',
      feedback: 'Manuel es un desarrollador altamente competente. Su habilidad para resolver problemas complejos y entregar resultados de alta calidad es impresionante.',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Laura Rodríguez',
      role: 'Directora de Marketing en Digital Future',
      feedback: 'Manuel tiene una habilidad única para entender las necesidades del cliente y traducirlas en soluciones prácticas y efectivas. Lo recomiendo ampliamente.',
      image: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonios</h2>
      <p>Lee lo que otros dicen sobre mi trabajo.</p>
      <div className="testimonials-grid">
        {testimonialsList.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
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
