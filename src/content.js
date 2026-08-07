// Single source of truth for site copy.
// Edit this file to update text anywhere on the site, no JSX changes needed.

const content = {
  hero: {
    eyebrow: "Computer Science graduate",
    headline: "Building secure, data-driven applications",
    subheadline:
      "From full-stack web apps to SIEM detection engineering and ETL pipelines, I like solving problems where security, data, and code intersect.",
    ctas: [
      { label: "View projects", href: "#projects", primary: true },
      // Add a real URL here once your resume PDF is ready:
      // { label: "Resume", href: "/resume.pdf", external: true },
      { label: "GitHub", href: "https://github.com/KhalidAlao", external: true },
      // Add once available: { label: "LinkedIn", href: "https://linkedin.com/in/...", external: true },
    ],
  },

  about: {
    paragraph:
      "I'm a Computer Science student at Brunel University London, graduating in 2027, with a habit of building across the entire stack: from React interfaces to SIEM detection rules to ETL pipelines. I like picking a technology I don't know yet and shipping something real with it, whether that's a firewall-segmented network lab or a real-time data dashboard. I'm currently looking for a graduate role where I can keep doing exactly that.",
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & libraries",
      items: ["React", "React Router", "Framer Motion"],
    },
    {
      category: "Data & analytics",
      items: ["Pandas", "SQLite", "Power BI", "Excel", "ETL pipelines"],
    },
    {
      category: "Security & networking",
      items: [
        "Wazuh (SIEM)",
        "nftables",
        "Detection engineering",
        "Incident response",
        "MITRE ATT&CK",
      ],
    },
    {
      category: "Cloud & data infrastructure",
      items: ["Azure Data Factory", "Databricks", "Synapse Analytics"],
    },
    {
      category: "Tools",
      items: ["Git & GitHub", "Vite", "Watchdog"],
    },
  ],

  education: {
    degree: "BSc Computer Science (Hons)",
    institution: "Brunel University London",
    status: "Expected graduation: 2027",
  },

  contact: {
    email: "khalidalao30@gmail.com",
    github: "https://github.com/KhalidAlao",
    githubLabel: "github.com/KhalidAlao",
    linkedin: null, // set to a URL once available — the Contact section hides this button while null
  },
};

export default content;
