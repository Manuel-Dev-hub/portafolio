// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaJava, FaPhp, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiCss3, SiHtml5, SiCsharp } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} /> },
  { name: 'Node.js', icon: <FaNodeJs style={{ color: '#68A063' }} /> },
  { name: 'Python', icon: <FaPython style={{ color: '#306998' }} /> },
  { name: 'JavaScript', icon: <FaJsSquare style={{ color: '#F0DB4F' }} /> },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#4DB33D' }} /> },
  { name: 'SQL & NoSQL', icon: <SiMysql style={{ color: '#00758F' }} /> },
  { name: 'CSS', icon: <SiCss3 style={{ color: '#264de4' }} /> },
  { name: 'HTML', icon: <SiHtml5 style={{ color: '#e34c26' }} /> },
  { name: 'C#', icon: <SiCsharp style={{ color: '#68217A' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#f89820' }} /> },
  { name: 'PHP', icon: <FaPhp style={{ color: '#8993be' }} /> },
  { name: 'Git', icon: <FaGitAlt style={{ color: '#f34f29' }} /> },
  { name: 'Docker', icon: <FaDocker style={{ color: '#0db7ed' }} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades</h2>
      <p>Estas son algunas de mis habilidades técnicas.</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div> {/* Icono de cada habilidad */}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
