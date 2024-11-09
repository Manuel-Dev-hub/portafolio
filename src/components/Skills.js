// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaJava, FaPhp, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiCss3, SiHtml5, SiCsharp } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} />, link: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'Node.js', icon: <FaNodeJs style={{ color: '#68A063' }} />, link: 'https://nodejs.org/en/docs/' },
  { name: 'Python', icon: <FaPython style={{ color: '#306998' }} />, link: 'https://docs.python.org/3/' },
  { name: 'JavaScript', icon: <FaJsSquare style={{ color: '#F0DB4F' }} />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#4DB33D' }} />, link: 'https://docs.mongodb.com/' },
  { name: 'SQL & NoSQL', icon: <SiMysql style={{ color: '#00758F' }} />, link: 'https://dev.mysql.com/doc/' },
  { name: 'CSS', icon: <SiCss3 style={{ color: '#264de4' }} />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'HTML', icon: <SiHtml5 style={{ color: '#e34c26' }} />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'C#', icon: <SiCsharp style={{ color: '#68217A' }} />, link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'Java', icon: <FaJava style={{ color: '#f89820' }} />, link: 'https://docs.oracle.com/en/java/' },
  { name: 'PHP', icon: <FaPhp style={{ color: '#8993be' }} />, link: 'https://www.php.net/docs.php' },
  { name: 'Git', icon: <FaGitAlt style={{ color: '#f34f29' }} />, link: 'https://git-scm.com/doc' },
  { name: 'Docker', icon: <FaDocker style={{ color: '#0db7ed' }} />, link: 'https://docs.docker.com/' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades</h2>
      <p>Estas son algunas de mis habilidades técnicas.</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <button 
              onClick={() => window.open(skill.link, '_blank')}
              className="documentation-btn"
            >
              Documentación
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
