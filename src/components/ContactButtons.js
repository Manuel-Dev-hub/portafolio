import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactButtons.css';

const ContactButtons = () => {
  return (
    <div className="contact-buttons">
      <a
        href="https://wa.me/50238536836"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button whatsapp"
      >
        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
      </a>
      <a
        href="https://www.linkedin.com/in/manuel-antonio-rios-cardona-475073327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVLssCAWjQ22Blp2o9yduSQ%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
      <a
        href="mailto:manuelantoniorioscardona4@gmail.com"
        className="contact-button email"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button github"
      >
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
    </div>
  );
};

export default ContactButtons;
