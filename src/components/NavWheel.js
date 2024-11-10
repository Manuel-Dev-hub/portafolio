// src/components/NavWheel.js

import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import './NavWheel.css';
import animationData from '../animations/animation.json';

const codeSnippets = {
  projects: `print("Hello, World!") # Python`,
  testimonials: `System.out.println("Hello, World!"); // Java`,
  contact: `Console.WriteLine("Hello, World!"); // C#`,
  blog: `echo "Hello, World!"; // PHP`
};

const NavWheel = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [displayedCode, setDisplayedCode] = useState({});

  useEffect(() => {
    setDisplayedCode(codeSnippets);
  }, []);

  return (
    <div id="robot-section" className="background">
      <div className="nav-wheel">
        <div className="rotating-wheel">
          <svg className="outer-circle" viewBox="0 0 600 600">
            <circle cx="300" cy="300" r="250" fill="none" stroke="#ffffff" strokeWidth="4" />
          </svg>

          <div className="nav-button">
            <span className="typing-text">{displayedCode.projects}</span>
          </div>
          <div className="nav-button">
            <span className="typing-text">{displayedCode.testimonials}</span>
          </div>
          <div className="nav-button">
            <span className="typing-text">{displayedCode.contact}</span>
          </div>
          <div className="nav-button">
            <span className="typing-text">{displayedCode.blog}</span>
          </div>
        </div>

        <div className="robot">
          <Lottie options={defaultOptions} height={250} width={250} />
          <div className="welcome-message">
            ¡Hola!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavWheel;
