import { useState } from "react";
import styles from "./Projects.module.css";
import Reveal from "../Reveal/Reveal";
import ProjectData from "../../ProjectData/ProjectData";

const featured = ProjectData.filter((p) => p.featured);
const secondary = ProjectData.filter((p) => !p.featured);

function FeaturedCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.spotlightCard}>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={styles.spotlightImage}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={styles.spotlightImagePlaceholder} aria-hidden="true" />
      )}

      <div className={styles.spotlightBody}>
        <h3 className={styles.spotlightTitle}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>

        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>

        {expanded && (
          <dl className={styles.star}>
            <div>
              <dt>Situation</dt>
              <dd>{project.situation}</dd>
            </div>
            <div>
              <dt>Task</dt>
              <dd>{project.task}</dd>
            </div>
            <div>
              <dt>Action</dt>
              <dd>{project.action}</dd>
            </div>
          </dl>
        )}

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.detailsToggle}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Hide details" : "View details"}
          </button>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            View code &rarr;
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoLink}
            >
              Live demo &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function SecondaryCard({ project }) {
  return (
    <article className={styles.compactCard}>
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={styles.compactImage}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className={styles.compactBody}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className={styles.tech}>
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Code &rarr;
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoLink}
            >
              Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} section`} aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title" className={styles.title}>
            Featured work
          </h2>
        </Reveal>

        <div className={styles.spotlightGrid}>
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <FeaturedCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className={styles.moreTitle}>More projects</h3>
        </Reveal>

        <div className={styles.compactGrid}>
          {secondary.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <SecondaryCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
