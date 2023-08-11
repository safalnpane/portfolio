// page.jsx

import Education from "./education";
import Work from "./Work";
import Skill from "./Skill";
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
    ["Git & GitHub", "Linux", "Docker"],
    ["Python", "Javascript", "Golang"],
    ["AWS", "MongoDb", "MySQL"],
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
