import React from 'react';
import styles from './Hero.module.css';
import ProjectData from '../ProjectData/ProjectData';

const extractSkills = (projects) => {
  const skillSet = new Set();
  projects.forEach((project) => {
    const words = project.description.split(/\W+/);
    words.forEach((word) => {
      if (["React", "JavaScript", "HTML", "CSS", "Framer", "Motion"].includes(word)) {
        skillSet.add(word);
      }
    });
  });
  return Array.from(skillSet);
};

const Hero = () => {
  const skills = extractSkills(ProjectData);

  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.title}>Hi, I'm Khalid Alao</h1>
      <button className={styles.button}>View My Work</button>
      
      <div className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
