import React from 'react';
import { SiGmail } from 'react-icons/si'; // Gmail icon from react-icons
import styles from './Contact.module.css';

const Contact = () => {
  const email = 'khalidalao30@gmail.com'; 
  const subject = 'Contact from Portfolio';
  const body = 'Hello, I would like to get in touch with you.';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.description}>Feel free to reach out</p>
      <div className={styles.emailLink} onClick={handleEmailClick}>
        <SiGmail className={styles.gmailIcon} />
        <span>Send me an email</span>
      </div>
    </section>
  );
};

export default Contact;