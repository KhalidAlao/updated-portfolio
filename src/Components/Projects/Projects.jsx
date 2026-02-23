import { forwardRef } from "react";
import styles from "./Projects.module.css";
import projects from "../ProjectData/ProjectData";

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className={styles.projects} aria-labelledby="projects-title">
      <h2 id="projects-title" className={styles.title}>
        Computer Science Projects
      </h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            {project.image && (
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className={styles.cardImage}
              />
            )}

            <div className={styles.cardHeader}>
              <h3>{project.title}</h3>
              <div className={styles.statusBadge}>Completed</div>
            </div>
            
            <p>{project.description}</p>

            <div className={styles.tech}>
              {project.tech.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>

            <div className={styles.actions}>
              <a
                href={project.githubLink}    
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                Source Code
              </a>
              {project.demoLink && (          
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoLink}
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export default Projects;