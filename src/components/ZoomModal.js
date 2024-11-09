// src/components/ZoomModal.js
import React from 'react';
import './ZoomModal.css';

const ZoomModal = ({ image, closeZoom }) => {
  return (
    <div className="zoom-modal-overlay" onClick={closeZoom}>
      <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-zoom" onClick={closeZoom}>✖</button> {/* Botón de cerrar */}
        <img src={image} alt="Zoomed" className="zoom-modal-image" />
      </div>
    </div>
  );
};

export default ZoomModal;
