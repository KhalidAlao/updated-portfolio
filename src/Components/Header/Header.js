import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>KA</span>
          <span className={styles.name}>Khalid Alao</span>
        </div>

        <nav aria-label="Main navigation" className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Home
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Projects
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
