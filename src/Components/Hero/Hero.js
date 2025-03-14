import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Hi, I'm Khalid Alao</h1>
      <button className={styles.button}>View My Work</button>
    </section>
  );
};

export default Hero;