

const ProjectData = [
  {
  title: "Council Service Request Management System",
  featured: true,
  tagline: "Full-stack council service request platform with role-based workflow, a complete audit trail, and 103 automated tests.",
  situation:
    "Local councils need a reliable way for residents to report issues and for staff to triage, assign, and resolve them accountably — with a clear, auditable record of who did what and when.",
  task:
    "Design and build a complete service request management system from scratch, modeling the real workflow of a council's digital services team, for a Software Engineer placement application at the London Borough of Hillingdon.",
  action:
    "Designed the system properly before writing code — user stories, an entity-relationship diagram, and a full REST API specification — then built a 17-endpoint Flask API with JWT authentication, a normalized six-table schema (SQLAlchemy + Alembic migrations), and a forward-only status state machine enforcing different permissions per role (residents can only view their own requests; officers can triage and self-assign; only admins can resolve or close). Every change is recorded in an append-only audit log. Backed the API with 103 automated pytest tests (~90% coverage) using isolated per-test fixtures, plus a hand-written bash/curl smoke-test script. Built a dependency-free vanilla JavaScript frontend with a hand-written hash-based router, served directly by Flask to avoid CORS. Deployed to a live Postgres-backed instance on Render, validating the database's PostgreSQL-compatible design for the first time outside local SQLite.",
  image: "https://i.ibb.co/TxsptRgG/Screenshot-2026-08-12-at-05-18-39.png", 
  githubLink: "https://github.com/KhalidAlao/Council-Service-Request-Management-System",
  demoLink: "https://council-service-api.onrender.com",
  tech: ["Flask", "SQLAlchemy", "PostgreSQL", "REST API", "JWT Auth", "pytest", "Bash/Curl Scripting", "JavaScript", "RBAC"],
}
  ,
  {
    title: "Enterprise Network Security Lab",
    featured: true,
    tagline: "Segmented enterprise architecture with firewall policy and attack simulation.",
    situation:
      "Flat, unsegmented networks are one of the most common ways attackers move laterally after an initial breach.",
    task: "Design and build a segmented enterprise network with isolated zones for public-facing and internal services.",
    action:
      "Built a DMZ-isolated architecture using nftables firewall policies, defined zone-based access rules, and ran attack simulations against the segmented layout to validate the ruleset.",
    image: "https://i.ibb.co/VY45C3m4/Logical-Network-Diagram-drawio.png",
    githubLink: "https://github.com/KhalidAlao/enterprise-network-security-lab",
    tech: ["Cybersecurity", "Network Security", "Firewall", "nftables", "Infrastructure"],
  },
  {
    title: "SOC Simulation & Detection Engineering Project",
    featured: true,
    tagline: "SIEM deployment with custom detection rules mapped to MITRE ATT&CK.",
    situation:
      "Enterprises need to detect and respond to credential-based attacks in real time, but junior security engineers rarely get hands-on SIEM experience before their first role.",
    task: "Build a working Security Operations Center simulation to practise detection engineering against a realistic attack.",
    action:
      "Deployed Wazuh SIEM on Ubuntu (via UTM on Apple Silicon), authored custom SSH brute-force detection rules mapped to MITRE ATT&CK technique T1110, and configured automated active response.",
    image: "https://i.ibb.co/tpkS6hRN/SOC-Lab-Architecture.png",
    githubLink: "https://github.com/KhalidAlao/Soc-Simulation",
    tech: ["Wazuh", "Detection Engineering", "Incident Response", "Security Operations", "Cybersecurity"],
  },
  {
    title: "Automated Procurement Audit & KPI Tracker",
    featured: true,
    tagline: "Python pipeline that audits purchase orders against spend and visualises bottlenecks.",
    situation:
      "Manually reconciling incoming PO documents against marketing spend is slow and error-prone.",
    task: "Build a pipeline that automatically audits incoming purchase orders and surfaces spend bottlenecks.",
    action:
      "Wrote a Python pipeline using Watchdog to monitor a folder for new PO documents, audited them against spend records with Pandas and SQLite, and visualised the resulting bottlenecks.",
    image: "https://i.ibb.co/XfZSpsRC/Screenshot-2026-04-09-at-20-21-44.png",
    githubLink: "https://github.com/KhalidAlao/Procurement-Audit-KPI-Tracker",
    tech: ["Procurement Analytics", "Watchdog", "Python Automation", "SQLite", "Pandas"],
  },
  {
    title: "Resident Data Platform",
    featured: true,
    tagline: "Azure-style ETL pipeline simulating resident services reporting.",
    situation:
      "Local-authority-style resident services need reliable reporting pipelines to track service delivery, but building one usually requires enterprise data infrastructure.",
    task: "Build an ETL-driven reporting pipeline that simulates resident services data flows end to end.",
    action:
      "Simulated resident services reporting pipelines using ETL workflows, data quality validation, and SQL reporting layers, drawing on cloud infrastructure concepts from Azure Data Factory, Databricks, and Synapse Analytics.",
    image: "",
    githubLink: "https://github.com/KhalidAlao/resident-data-platform",
    tech: ["Data Engineering", "Python", "ETL Pipelines", "SQL", "Azure"],
  },

  // Secondary projects — shown in the compact grid, no STAR expansion.
  {
    title: "Fintech Cyber Risk Presentation",
    featured: false,
    description:
      "A portfolio project demonstrating cloud risk tracking, operational resilience, and product governance using Excel and Power BI (web version).",
    image: "https://i.ibb.co/1t9rDxpw/Operational-Risk-Dashboard.png",
    githubLink: "https://github.com/KhalidAlao/Fintech-Cyber-Risk-Presentation",
    tech: ["Power BI", "Excel", "Cyber Risk", "Operational Resilience", "Product Governance"],
  },
  {
    title: "Cryptocurrency Price Tracker",
    featured: false,
    description:
      "A responsive React app displaying real-time cryptocurrency prices via the CoinGecko API, with dynamic updates, loading states, and error handling.",
    image: "https://i.postimg.cc/ydPtTY7c/temp-Image7b-LSSr.avif",
    githubLink: "https://github.com/KhalidAlao/real-time-data-visualizer",
    demoLink: "https://khalidalao.github.io/real-time-data-visualizer",
    tech: ["React", "REST API", "Axios/Fetch", "Responsive Design", "Real-time Data"],
  },
  {
    title: "4-7-8 Breathing Guide",
    featured: false,
    description:
      "A guided breathing application built with React and Framer Motion, designed to help users practise the 4-7-8 breathing technique for relaxation.",
    image: "https://i.ibb.co/993HdN60/momo-studio-DXZj4-Ftk-H8w-unsplash.jpg",
    githubLink: "https://github.com/KhalidAlao/breathwork-guide",
    demoLink: "https://khalidalao.github.io/breathwork-guide",
    tech: ["React", "Framer Motion", "UI/UX", "Frontend"],
  },
  {
    title: "Snake Game",
    featured: false,
    description:
      "A classic Snake game built with HTML, CSS, and JavaScript, featuring score tracking, a restart button, and smooth keyboard-controlled gameplay.",
    image: "https://i.ibb.co/DxjPSPB/Screenshot-2025-03-16-at-09-11-07.png",
    githubLink: "https://github.com/KhalidAlao/Snake-Game",
    demoLink: "https://khalidalao.github.io/Snake-Game",
    tech: ["JavaScript", "HTML5", "CSS3", "Game Development"],
  },
  {
    title: "JavaScript Calculator",
    featured: false,
    description:
      "A calculator built with JavaScript, HTML, and CSS, supporting basic arithmetic, decimal input, and a clean interface.",
    image: "https://i.ibb.co/NdhDSvWS/Screenshot-2025-03-16-at-12-52-23.png",
    githubLink: "https://github.com/KhalidAlao/Javascript-Calculator",
    demoLink: "https://khalidalao.github.io/Javascript-Calculator",
    tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
  },
];

export default ProjectData;
