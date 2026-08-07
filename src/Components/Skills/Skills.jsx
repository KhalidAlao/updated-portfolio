import styles from "./Skills.module.css";
import Reveal from "../Reveal/Reveal";
import content from "../../content";

export default function Skills() {
  return (
    <section id="skills" className={`${styles.skills} section`} aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title" className={styles.title}>
            Technical toolkit
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {content.skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.chipList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
