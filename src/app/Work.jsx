// work.jsx

import Image from "next/image";

import Card from "../components/Card";

import styles from "./work.module.css";

export default function Work() {
  const myProjects = [
    {
      imageUrl: "/heroImage.jpeg",
      name: "CalcApp",
      description:
        "Calculator app made with Angular. This project was generated with Angular CLI version 11.1.1",
      techUsed: ["Java", "Spring", "HTML&CSS"],
    },
    {
      imageUrl: "/heroImage.jpeg",
      name: "CalcApp1",
      description:
        "Calculator app made with Angular. This project was generated with Angular CLI version 11.1.1",
      techUsed: ["Java", "Spring", "HTML&CSS"],
    },
    {
      imageUrl: "/heroImage.jpeg",
      name: "CalcApp2",
      description:
        "Calculator app made with Angular. This project was generated with Angular CLI version 11.1.1",
      techUsed: ["Java", "Spring", "HTML&CSS"],
    },
    {
      imageUrl: "/heroImage.jpeg",
      name: "CalcApp3",
      description:
        "Calculator app made with Angular. This project was generated with Angular CLI version 11.1.1",
      techUsed: ["Java", "Spring", "HTML&CSS"],
    },
  ];

  return (
    <section className="section">
      <h1 className="sectionTitle">Work</h1>
      <p className="sectionSubtitle">
        Check my personal and professional projects. If you have any questions
        feel free to contact me for more information.
      </p>
      <div className={styles.worklist}>
        {myProjects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
