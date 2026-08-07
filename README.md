# Khalid Alao — Developer Portfolio

A single-page developer portfolio showcasing full-stack, data engineering,
and cybersecurity projects.

**Live site:** https://khalidalao.github.io/updated-portfolio/

## Overview

The site is a single-page scroll covering:

- **Hero** — a direct statement of what I build
- **About** — a short, human introduction
- **Featured projects** — four projects presented with a Situation/Task/Action
  breakdown, expandable per card
- **More projects** — a compact grid of additional work
- **Skills** — grouped by category (languages, frameworks, data, security, etc.)
- **Education** — degree and expected graduation
- **Contact** — direct email and GitHub links

## Tech stack

- [React 18](https://react.dev/)
- [Vite 7](https://vite.dev/)
- CSS Modules (no CSS framework dependency)
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk),
  [Inter](https://fonts.google.com/specimen/Inter),
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — all
  open-source via Google Fonts

## Project structure

```
src/
  content.js              # All site copy — hero, about, skills, education, contact
  App.jsx                 # Top-level layout, section order
  App.css                 # Design tokens (colors, spacing) and base styles
  ProjectData/
    ProjectData.js        # All project entries — featured and secondary
  Components/
    Header/                # Nav + mobile menu
    Hero/
    About/
    Projects/              # Featured spotlight cards + secondary grid
    Skills/
    Education/
    Contact/
    Footer/
    Reveal/                 # Scroll-triggered fade-in wrapper
docs/                       # Setup, design, and contribution guides
.github/workflows/deploy.yml # CI/CD — auto-builds and deploys on push
```


---

© 2026 Khalid Alao. MIT Licensed.
