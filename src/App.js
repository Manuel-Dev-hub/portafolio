import React, { useEffect } from 'react';
import './App.css';
import NavWheel from './components/NavWheel';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Recognition from './components/Recognition';

function App() {
  useEffect(() => {
    // Desplazar a la parte superior (header) al cargar la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Sección de la rueda de navegación y cuadro de bienvenida que ocupa toda la pantalla inicial */}
      <section className="full-screen-section">
        <Home />
        <NavWheel />
      </section>

      {/* Otras secciones que aparecen al hacer scroll hacia abajo */}
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="recognition">
        <Recognition />
      </section>
    </div>
  );
}

export default App;
