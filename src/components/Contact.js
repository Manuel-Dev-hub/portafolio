// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>Estoy disponible para consultas y colaboraciones. ¡Contáctame a través de los siguientes enlaces o completa el formulario!</p>

      <div className="contact-links">
        <a href="https://wa.me/50238536836" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/manuel-antonio-rios-cardona-475073327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVLssCAWjQ22Blp2o9yduSQ%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="mailto:manuelantoniorioscardona4@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} /> Correo
        </a>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
};

export default Contact;
