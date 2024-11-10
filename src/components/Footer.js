// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Manuel Antonio Rios Cardona</h2>
          <p>Desarrollador Full Stack y entusiasta de la tecnología.</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/tuPerfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/manuel-antonio-rios-cardona-475073327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVLssCAWjQ22Blp2o9yduSQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/tuPerfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="mailto:manuelantoniorioscardona4@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Manuel Antonio Rios Cardona. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
