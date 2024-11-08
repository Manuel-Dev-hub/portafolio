// src/components/Recognition.js
import React from 'react';
import './Recognition.css';

const Recognition = () => {
  const recognitionList = [
    {
      title: 'Hackathon Universitario 2024',
      description: '1er Lugar por soluciones innovadoras en desarrollo de software.',
      icon: '🏆',
    },
    {
      title: 'Certificación Full Stack',
      description: 'Certificación avanzada en tecnologías como React, Node.js y MongoDB.',
      icon: '📜',
    },
    {
      title: 'Certificación en Hacking Ético',
      description: 'Dominio de estrategias de seguridad y evaluación de vulnerabilidades.',
      icon: '🔐',
    },
    {
      title: 'Curso de Diseño UX/UI',
      description: 'Capacitación completa en diseño centrado en el usuario y prototipado.',
      icon: '🎨',
    },
    {
      title: 'Google Analytics Avanzado',
      description: 'Especialización en análisis de datos para mejorar el rendimiento web.',
      icon: '📊',
    },
    {
      title: 'Mejor Proyecto de Innovación 2023',
      description: 'Reconocimiento en una feria tecnológica por soluciones disruptivas.',
      icon: '💡',
    },
  ];

  return (
    <section id="recognition" className="recognition-section">
      <h2>Reconocimientos</h2>
      <p>Premios, certificaciones y logros obtenidos a lo largo de mi carrera.</p>
      <div className="recognition-grid">
        {recognitionList.map((recognition, index) => (
          <div className="recognition-card" key={index}>
            <div className="recognition-icon">{recognition.icon}</div>
            <h3>{recognition.title}</h3>
            <p>{recognition.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recognition;
