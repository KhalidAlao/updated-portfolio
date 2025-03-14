import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        I am a dedicated first-year computer science student based in London, interested in software development and eager to embrace new technologies that align with my expanding career goals.
      </p>
    </section>
  );
};

export default About;