import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Khalid Alao. All rights reserved.</p>
      <a href="https://github.com/KhalidAlao" className={styles.githubLink}>GitHub</a>
    </footer>
  );
};

export default Footer;