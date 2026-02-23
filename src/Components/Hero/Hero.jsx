import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Computer Science Student</h1>

        <p className={styles.lead}>
          Welcome to my portfolio.
        </p>

        <div className={styles.actions}>
          <Link to="/projects" className={styles.primaryBtn}>
            View Projects
          </Link>
          <a
            href="https://github.com/KhalidAlao"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
