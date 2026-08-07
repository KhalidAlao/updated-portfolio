import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import content from "../../content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <a href="#top" className={styles.brand} aria-label="Back to top">
          <span className={styles.logo}>KA</span>
          <span className={styles.name}>Khalid Alao</span>
        </a>

        <nav aria-label="Main navigation" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.rightGroup}>
          <a
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            GitHub
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpenTop : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpenMid : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpenBottom : ""}`} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
