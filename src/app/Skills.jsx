// Skills.jsx
import React from "react";

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
      <div>
        {mySkills.map((skill) => (
          <h4 key={skill}>{skill}</h4>
        ))}
      </div>
    </section>
  );
}
