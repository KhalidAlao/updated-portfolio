import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
      Hi there! I’m a first-year computer science student based in London, with aspirations of working in software development and constantly exploring new technologies. Currently, I’m learning frontend development, with plans to expand my skills into full-stack development in the near future.
      </p>
    </section>
  );
};

export default About;