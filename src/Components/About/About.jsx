import styles from "./About.module.css";
import Reveal from "../Reveal/Reveal";
import content from "../../content";

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`} aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className={styles.title}>
            Who I am
          </h2>
          <p className={styles.paragraph}>{content.about.paragraph}</p>
        </Reveal>
      </div>
    </section>
  );
}
