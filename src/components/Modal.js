// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>✖</button>
        <p className="click-instruction">Ver imagen, da clic en cada una para ampliar.</p> {/* Mensaje de instrucción */}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
