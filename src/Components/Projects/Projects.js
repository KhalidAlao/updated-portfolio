import React, { forwardRef } from 'react';
import styles from './Projects.module.css';
import ProjectData from '../ProjectData/ProjectData';


const Projects = forwardRef((props, ref) => {
  return (
    <article ref={ref} className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {ProjectData.map((project, index) => (
          <article key={index} className={styles.projectCard}>
            <img src={project.image} alt={`Screenshot of ${project.title}`} className={styles.projectImage} loading="lazy" />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.githubLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.demoLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </article>
        ))}
      </div>
    </article>
  );
});

export default Projects;