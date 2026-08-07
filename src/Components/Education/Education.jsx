import styles from "./Education.module.css";
import Reveal from "../Reveal/Reveal";
import content from "../../content";

export default function Education() {
  const { degree, institution, status } = content.education;

  return (
    <section id="education" className={`${styles.education} section`} aria-labelledby="education-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 id="education-title" className={styles.title}>
            {degree}
          </h2>
          <p className={styles.institution}>{institution}</p>
          <p className={styles.status}>{status}</p>
        </Reveal>
      </div>
    </section>
  );
}
