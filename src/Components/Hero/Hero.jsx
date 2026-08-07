import styles from "./Hero.module.css";
import Reveal from "../Reveal/Reveal";
import content from "../../content";

export default function Hero() {
  const { eyebrow, headline, subheadline, ctas } = content.hero;

  return (
    <section id="top" className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <Reveal className={styles.content}>
          <p className="eyebrow">
            <span aria-hidden="true">&gt;</span> {eyebrow}
          </p>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subheadline}>{subheadline}</p>

          <div className={styles.ctas}>
            {ctas.map((cta) =>
              cta.external ? (
                <a
                  key={cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cta.primary ? styles.primary : styles.secondary}
                >
                  {cta.label}
                </a>
              ) : (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={cta.primary ? styles.primary : styles.secondary}
                >
                  {cta.label}
                </a>
              )
            )}
          </div>
        </Reveal>

        <div className={styles.grid} aria-hidden="true" />
      </div>
    </section>
  );
}
