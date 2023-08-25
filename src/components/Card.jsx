// Card.jsx

import Image from "next/image";

import styles from "./card.module.css";

export default function Card({ project }) {
  return (
    <div className={styles.card}>
      <Image
        src={project.imageUrl}
        alt="Project image"
        height="300"
        width="300"
        className={styles.image}
      />
      <h1 className={styles.cardTitle}>{project.name}</h1>
      <div className={styles.techUsed}>
        {project.techUsed.map((tech) => (
          <p key={tech} className={styles.tech}>
            {tech}
          </p>
        ))}
      </div>
      <p className={styles.cardSubtitle}>{project.description}</p>
      <a
        href={project.link}
        className={project.link ? "button" : styles.disabledBtn}
      >
        View Project
      </a>
    </div>
  );
}
