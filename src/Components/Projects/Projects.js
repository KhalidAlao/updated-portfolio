import React, { forwardRef } from 'react';
import styles from './Projects.module.css';
import ProjectData from '../ProjectData/ProjectData';


const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {ProjectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.githubLink} className={styles.projectLink}>GitHub</a>
            <a href={project.demoLink} className={styles.projectLink}>Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;