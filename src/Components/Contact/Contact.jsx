import styles from "./Contact.module.css";
import Reveal from "../Reveal/Reveal";
import content from "../../content";

export default function Contact() {
  const { email, github, githubLabel, linkedin } = content.contact;

  return (
    <section id="contact" className={`${styles.contact} section`} aria-labelledby="contact-title">
      <div className="container">
        <Reveal className={styles.inner}>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className={styles.title}>
            Let&apos;s talk.
          </h2>
          <p className={styles.subtitle}>Open to graduate roles — reach out any time.</p>

          <ul className={styles.list}>
            <li>
              <a href={`mailto:${email}`} className={styles.link}>
                {email}
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {githubLabel}
              </a>
            </li>
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  LinkedIn
                </a>
              </li>
            )}
          </ul>

          <a href={`mailto:${email}`} className={styles.cta}>
            Send an email &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
