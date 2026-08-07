import styles from "./Footer.module.css";
import content from "../../content";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Khalid Alao.</p>
        <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </a>
      </div>
    </footer>
  );
}
