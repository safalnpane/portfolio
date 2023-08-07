// Skills.jsx

import TechPill from "../components/TechPill";

import styles from "./skill.module.css";

export default function Skills() {
  const mySkills = [
    "Nodejs",
    "React",
    "Expressjs",
    "MongoDb",
    "MySQL",
    "Python",
    "Django",
    "Git & GitHub",
    "AWS",
    "REST API",
  ];

  return (
    <section className="section">
      <h1 className="sectionTitle">Skills</h1>
      <p className="sectionSubtitle">
        I&apos;m well versed in following tools and technologies.
      </p>
      <div className={styles.skillList}>
        {mySkills.map((skill) => (
          <TechPill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
