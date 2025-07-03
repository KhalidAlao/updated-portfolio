import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section aria-labelledby="about-title" className={styles.aboutSection} id="about">
      <h2 id="about-title" className={styles.title}>About Me</h2>
      <p tabIndex="0" className={styles.description}>
      Hi there! I’m a first-year computer science student based in London, with aspirations of working in software development. Currently, I’m learning frontend development, with plans to expand my skills into full-stack development in the near future.
      </p>
    </section>
  );
};

export default About;