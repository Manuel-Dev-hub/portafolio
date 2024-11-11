import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode, faCode, faGlobe, faMobileAlt, faPalette, faSearch, faDatabase, faUsers, faRocket, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import perfil from '../assets/perfil.jpg';

const iconStyle = { color: '#000000' }; // Color negro para los íconos

const Home = () => {
  return (
    <section id="home">
      <img src={perfil} alt="Foto de Manuel Antonio Rios Cardona" className="profile-image" />
      <h1>Manuel Antonio Rios Cardona</h1>
      <p>Apasionado del desarrollo web con 1 año de experiencia en creación de herramientas digitales para impulsar el crecimiento empresarial.</p>
      <p><FontAwesomeIcon icon={faGraduationCap} style={iconStyle} /> Estudiante de Ingeniería en Sistemas</p>
      <p><FontAwesomeIcon icon={faLaptopCode} style={iconStyle} /> Full Stack Developer</p>
      <p><FontAwesomeIcon icon={faCode} style={iconStyle} /> JavaScript, React, Node.js, Python</p>
      <p><FontAwesomeIcon icon={faGlobe} style={iconStyle} /> Diseño Web Responsivo</p>
      <p><FontAwesomeIcon icon={faMobileAlt} style={iconStyle} /> Desarrollo de Aplicaciones</p>
      <p><FontAwesomeIcon icon={faPalette} style={iconStyle} /> UX/UI</p>
      <p><FontAwesomeIcon icon={faSearch} style={iconStyle} /> Optimización SEO</p>
      <p><FontAwesomeIcon icon={faDatabase} style={iconStyle} /> SQL y NoSQL</p>
      <p><FontAwesomeIcon icon={faUsers} style={iconStyle} /> Líder de Equipo</p>
      <p><FontAwesomeIcon icon={faRocket} style={iconStyle} /> Transformación Digital</p>
      
      {/* Botón de descarga de CV */}
      <a href="/CV_Manuel_Rios.pdf" download="CV_Manuel_Rios" className="download-cv-button">
          <FontAwesomeIcon icon={faFileDownload} /> Descargar CV
      </a>
    </section>
  );
};

export default Home;
