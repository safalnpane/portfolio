// page.jsx

import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";
import styles from "./resume.module.css";

export default function Resume() {
  const educations = [
    {
      title: "Bachelor of Information Technology",
      where: "King's Own Institute",
      graduation: "2017 - 2020",
    },
  ];

  const works = [
    {
      title: "IT Support Technician",
      where: "Enbridge IT Services, Sydeny, NSW",
      duration: "APR 2019 - FEB 2020",
    },
    {
      title: "Penetration Tester",
      where: "BPS Ventures, Sydney, NSW",
      duration: "JUN 2021 - JUN 2021",
    },
    {
      title: "Contract Web Developer",
      where: "BPS Ventures, Sydeny, NSW",
      duration: "APR 2021 - JUL 2021",
    },
    {
      title: "Software Enginner",
      where: "Nappy and Paste, Nepal",
      duration: "SEP 2021 - FEB 2022",
    },
    {
      title: "Full Stack Enginner",
      where: "DevsEducation, Nepal",
      duration: "JAN 2018 - Current",
    },
  ];

  const skillsAndTools = [
    ["Git & GitHub", "Linux", "Docker", "CI/CD", "TDD", "NeoVim", "Tmux"],
    [
      "Python",
      "Javascript",
      "Golang",
      "Django",
      "Expressjs",
      "React",
      "Nextjs",
    ],
    ["AWS", "MongoDb", "MySQL"],
  ];
  return (
    <section className={styles.resumePage}>
      <h1 className={styles.title}>Resume</h1>
      <p className="sectionSubtitle">
        Respectful self-motivator gifted at finding reliable solutions for
        software issues. Experienced in Full stack development and DevOps and
        offering skills in Python and JavaScript. Fluent in English and
        accustomed to working with cross-cultural, global teams.
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
        <div className={styles.skills}>
          <Skill names={skillsAndTools[0]} />
          <Skill names={skillsAndTools[1]} />
          <Skill names={skillsAndTools[2]} />
        </div>
      </div>
      <div id="contact" className="section">
        <h1 className="sectionTitle">Contact</h1>
        <p className="sectionSubtitle">
          Feel free to contact me regarding new projects and colllaboration, or
          simply to say hello.
        </p>
        <div className={styles.contactContainer}>
          <div>
            <h2 className={styles.contactHeading}>Address</h2>
            <h4>Sydeny, Australia</h4>
          </div>
          <div>
            <h2 className={styles.contactHeading}>Email</h2>
            <h4>contact@safalneupane.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
