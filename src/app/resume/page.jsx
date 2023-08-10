// page.jsx

import Education from "./education";
import Work from "./Work";
import styles from "./resume.module.css";

export default function Resume() {
  const educations = [
    {
      title: "Bachelor of Information Technology",
      where: "Federation University",
      graduation: "2017 - 2021",
    },
  ];

  const works = [
    {
      title: "Web developer",
      where: "Aspeed",
      duration: "2018 - 2019",
    },
  ];

  const skillsAndTools = [
    "Git & GitHub",
    "HTML&CSS",
    "Javascript",
    "Nextjs",
    "Reactjs",
  ];
  return (
    <section className={styles.resumePage}>
      <h1 className={styles.title}>Resume</h1>
      <p className="sectionSubtitle">
        Experienced Web Developer with passion for creating attractive and
        interactive websites meeting customer needs and exceeding expectations.
        Excels in HTML, CSS, JavaScript and Python development.
      </p>
      <div className={styles.resumeSection}>
        <h1 className={styles.resumeSectionTitle}>Education</h1>
        {educations.map((education) => (
          <Education key={education.title} item={education} />
        ))}
      </div>
      <div className={styles.resumeSection}>
        <h1 className={styles.resumeSectionTitle}>Work Experience</h1>
        {works.map((work) => (
          <Work key={work.title} item={work} />
        ))}
      </div>
      <div className={styles.resumeSection}>
        <h1 className={styles.resumeSectionTitle}>Skills and Tools</h1>
      </div>
    </section>
  );
}
