// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import NavWheel from './components/NavWheel';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Recognition from './components/Recognition';
import Testimonials from './components/Testimonials';
import ContactButtons from './components/ContactButtons';
import YourComponent from './components/YourComponent';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <section className="full-screen-section">
        <Home />
        <NavWheel />
      </section>
      <YourComponent /> {/* Componente con el fondo de la imagen */}
      
      {/* Nuevo orden de las secciones */}
      <section id="projects">
        <Projects />
      </section>
      <section id="recognition">
        <Recognition />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      <ContactButtons />
    </div>
  );
}

export default App;
