import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section aria-labelledby="about-title" className={styles.aboutSection} id="about">
      <h2 id="about-title" className={styles.title}>About Me</h2>
      <p tabIndex="0" className={styles.description}>
      I'm a Computer Science student at Brunel University with an interest in building across the entire development spectrum. From interactive frontend applications with React and Framer Motion to real‑time data visualisation using public APIs, and from command‑line tools in Bash with SQLite to network security labs with firewall policies; I enjoy tackling challenges at every level. My projects span modern web development, systems programming, and cybersecurity, reflecting my curiosity and adaptability. I'm continuously deepening my knowledge of responsive design, accessibility, and scalable architecture, always looking for opportunities to learn and contribute to impactful work.
      </p>
    </section>
  );
};

export default About;