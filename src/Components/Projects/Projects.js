import React, { forwardRef , useState} from 'react';
import styles from './Projects.module.css';
import ProjectData from '../ProjectData/ProjectData';





const Projects = forwardRef((props, ref) => {
  
  const uniqueTags = [...new Set(ProjectData.flatMap( project => project.tags))];
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredProjects = selectedTag ? ProjectData.filter(project => project.tags.includes(selectedTag)) : ProjectData;



  return (
    <article ref={ref} className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.filterBar}>
  <button
    className={`${styles.filterButton} ${selectedTag === null ? styles.active : ""}`}
    onClick={() => setSelectedTag(null)}
  >
    All
  </button>

  {uniqueTags.map(tag => (
    <button
      key={tag}
      className={`${styles.filterButton} ${selectedTag === tag ? styles.active : ""}`}
      onClick={() => setSelectedTag(tag)}
    >
      {tag}
    </button>
  ))}
</div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <article key={index} className={styles.projectCard}>
            <div className={styles.projectTags}>
              {project.tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                 {tag}
                  </span>
                          ))}
              </div>
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