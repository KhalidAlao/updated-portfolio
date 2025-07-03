import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section aria-labelledby="about-title" className={styles.aboutSection} id="about">
      <h2 id="about-title" className={styles.title}>About Me</h2>
      <p tabIndex="0" className={styles.description}>
      Computer Science student at Brunel University with a passion for full-stack development, specializing in React, JavaScript, and RESTful APIs. I’ve built real-world projects like a 4-7-8 Breathing Guide (React, Framer Motion), a Cryptocurrency Price Tracker (CoinGecko API), and a CLI Expense Tracker (Bash, SQLite), demonstrating my ability to solve problems across the stack—from interactive UIs to efficient backend systems. Currently deepening my skills in responsive design, accessibility, and scalable architecture, I thrive on turning ideas into clean, performant applications. Let’s connect and create something impactful!
      </p>
    </section>
  );
};

export default About;