import React from 'react';
import styles from './Hero.module.css';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,  
  FaPython, 
  FaGitAlt,
  FaFigma,
  FaAccessibleIcon
} from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';

const Hero = () => {
  

  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Framer Motion', icon: <SiFramer /> },
    { name: 'UI/UX Design', icon: <FaFigma /> },
    { name: 'Accessibility', icon: <FaAccessibleIcon /> },
  ];

  

  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.title}>Hi, I'm Khalid Alao</h1>
      <div className={styles.buttonWrapper}>
        
      </div>
      
      <div className={styles.skills}>
        <h2 className={styles.skillsTitle}>Technical Proficiencies</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;