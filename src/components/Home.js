import React from 'react';
import './Home.css';
import perfil from '../assets/perfil.jpg'; // Asegúrate de que esta ruta y extensión sean correctas

const Home = () => {
  return (
    <section id="home">
      <img src={perfil} alt="Foto de Manuel Antonio Rios Cardona" className="profile-image" />
      <h1>Manuel Antonio Rios Cardona</h1>
      <p>🎓 Estudiante de Ingeniería en Sistemas</p>
      <p>💻 Full Stack Developer</p>
      <p>📜 JavaScript, React, Node.js, Python</p>
      <p>🌐 Diseño Web Responsivo</p>
      <p>📱 Desarrollo de Aplicaciones</p>
      <p>🎨 UX/UI</p>
      <p>🔍 Optimización SEO</p>
      <p>🗄️ SQL y NoSQL</p>
      <p>👥 Líder de Equipo</p>
      <p>🚀 Transformación Digital</p>
    </section>
  );
};

export default Home;
