// src/components/Recognition.js
import React, { useState } from 'react';
import './Recognition.css';
import Modal from './Modal'; // Importa el componente Modal
import ZoomModal from './ZoomModal'; // Importa el modal de zoom

// Importa las imágenes
import hackathon1 from '../assets/images/hackathon1.png';
import hackathon2 from '../assets/images/hackathon2.png';
import hackathon3 from '../assets/images/hackathon3.png';
import hackathon4 from '../assets/images/hackathon4.png';
import fullstack from '../assets/images/fullstack.png'; // Imagen de Full Stack
import python from '../assets/images/python.png'; // Imagen de Python
import hacking from '../assets/images/hacking_etico.png'; // Imagen de Hacking Ético

const Recognition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState(null); // Para controlar la imagen en zoom
  const [modalContent, setModalContent] = useState(null); // Para cambiar el contenido del modal

  // Función para abrir el modal de reconocimiento
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal de reconocimiento
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para abrir la imagen en modo zoom
  const openZoom = (image) => {
    setZoomImage(image);
  };

  // Función para cerrar el modal de zoom
  const closeZoom = () => {
    setZoomImage(null);
  };

  return (
    <section id="recognition" className="recognition-section">
      <h2>Reconocimientos</h2>
      <p>Premios, certificaciones y logros obtenidos a lo largo de mi carrera.</p>
      <div className="recognition-grid">
        {/* Tarjeta del Hackathon */}
        <div className="recognition-card">
          <div className="recognition-icon">🏆</div>
          <h3>Hackathon Universitario 2024</h3>
          <p>1er Lugar por soluciones innovadoras en desarrollo de software.</p>
          <button className="view-more-btn" onClick={() => openModal('hackathon')}>
            Ver más
          </button>
        </div>

        {/* Tarjeta de Full Stack */}
        <div className="recognition-card">
          <div className="recognition-icon">📜</div>
          <h3>Certificación Full Stack</h3>
          <p>Certificación avanzada en tecnologías como React, Node.js y MongoDB.</p>
          <button className="view-more-btn" onClick={() => openModal('fullstack')}>
            Ver más
          </button>
        </div>

        {/* Tarjeta de Hacking Ético */}
        <div className="recognition-card">
          <div className="recognition-icon">🔒</div>
          <h3>Certificación en Hacking Ético</h3>
          <p>Dominio de estrategias de seguridad y evaluación de vulnerabilidades.</p>
          <button className="view-more-btn" onClick={() => openModal('hacking')}>
            Ver más
          </button>
        </div>
      </div>

      {/* Modal para mostrar detalles del Hackathon */}
      {isModalOpen && modalContent === 'hackathon' && (
        <Modal closeModal={closeModal}>
          <h2>Hackathon Universitario 2024</h2>
          <img src={hackathon1} alt="Hackathon 1" className="modal-image" onClick={() => openZoom(hackathon1)} />
          <p><strong>1er Lugar</strong> por soluciones innovadoras en desarrollo de software.</p>
          
          <img src={hackathon2} alt="Hackathon 2" className="modal-image" onClick={() => openZoom(hackathon2)} />
          <p>
            <strong>Proyecto de IA con Perspectiva de Género:</strong> Durante el Hackathon, desarrollamos una inteligencia artificial diseñada para eliminar el sesgo en contrataciones. <br />
            <strong>Resultados:</strong> Reducción del sesgo de género en un <strong>80%</strong> en las empresas contratantes. <br />
            <strong>Fecha:</strong> 9 - 13 de julio de 2024.
          </p>

          <h3>Otros Logros y Proyectos Destacados</h3>
          <div className="project-item">
            <img src={hackathon3} alt="Hackathon GreenPretzel" className="modal-image-small" onClick={() => openZoom(hackathon3)} />
            <div>
              <p><strong>Hackathon GreenPretzel - Marzo 2024:</strong></p>
              <p>Desarrollamos una <strong>IA para la detección de contaminación</strong>, que logró mejorar la viabilidad de su plataforma en un <strong>50%</strong>. Este proyecto fue un avance significativo en soluciones ecológicas impulsadas por inteligencia artificial.</p>
            </div>
          </div>
          <div className="project-item">
            <img src={hackathon4} alt="Simulador de Tecnologías Emergentes" className="modal-image-small" onClick={() => openZoom(hackathon4)} />
            <div>
              <p><strong>Simulador de Tecnologías Emergentes y Futuro del Empleo - Agosto 2024:</strong></p>
              <p>Creamos un <strong>simulador en 3D</strong> con Unix, diseñado para brindar prácticas laborales a los estudiantes. Este simulador mejoró la efectividad en la capacitación en un <strong>70%</strong>, proporcionando experiencias de trabajo reales a través de la realidad aumentada.</p>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal para mostrar detalles de Full Stack */}
      {isModalOpen && modalContent === 'fullstack' && (
        <Modal closeModal={closeModal}>
          <h2>Certificación Full Stack</h2>
          <img src={fullstack} alt="Certificación Full Stack" className="modal-image" onClick={() => openZoom(fullstack)} />
          <p>
            <strong>Descripción:</strong> Este certificado avala habilidades en el desarrollo Full Stack, incluyendo tecnologías de frontend como React y backend con Node.js y MongoDB. 
          </p>
          <img src={python} alt="Certificación en Python" className="modal-image" onClick={() => openZoom(python)} />
          <p>
            <strong>Python Avanzado:</strong> Esta certificación incluye habilidades avanzadas en Python para desarrollo web, análisis de datos y automatización de tareas.
          </p>
        </Modal>
      )}

      {/* Modal para mostrar detalles de Hacking Ético */}
      {isModalOpen && modalContent === 'hacking' && (
        <Modal closeModal={closeModal}>
          <h2>Certificación en Hacking Ético</h2>
          <img src={hacking} alt="Certificación en Hacking Ético" className="modal-image" onClick={() => openZoom(hacking)} />
          <p>
            <strong>Descripción:</strong> La certificación en Hacking Ético proporciona conocimientos avanzados en ciberseguridad, auditorías de sistemas, y prácticas para identificar y remediar vulnerabilidades en infraestructuras de TI.
          </p>
        </Modal>
      )}

      {/* Modal de Zoom para la imagen seleccionada */}
      {zoomImage && <ZoomModal image={zoomImage} closeZoom={closeZoom} />}
    </section>
  );
};

export default Recognition;
