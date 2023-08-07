// work.jsx

import Image from "next/image";

import Card from "../components/Card";

import styles from "./work.module.css";

export default function Work() {
  const myProjects = [
    {
      imageUrl: "/aspeed.png",
      name: "Aspeed",
      description:
        "An online platform for students to learn, practice, and attend tests. The paltfom also supports real-time online tests.",
      techUsed: [
        "React",
        "Django",
        "AWS",
        "PostgreSQL",
        "HTML&CSS",
        "TailwindCSS",
        "REST API",
      ],
    },
    {
      imageUrl: "/aspeed.png",
      name: "Tasky",
      description:
        "Task management, chat, and tracking platform for a manufacturing plant. With admin and staff management.",
      techUsed: [
        "React",
        "Express",
        "Nodejs",
        "MongoDb",
        "HTML&CSS",
        "Bootstrap",
        "REST API",
      ],
    },
    {
      imageUrl: "/heroImage.jpeg",
      name: "Lockpick Games",
      description:
        "Server creation and deployment for hosting games. A Python script to automate web-based game hosting in AWS environment.",
      techUsed: ["Python", "AWS", "REST API", "Linux"],
    },
    {
      imageUrl: "/heroImage.jpeg",
      name: "Portfolio",
      description:
        "My portfolio site to showcase my skills and projects. This project was created using NextJs version 13.",
      techUsed: ["NextJs", "HTML&CSS"],
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
