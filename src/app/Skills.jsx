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
    <section>
      <h1>Skills</h1>
      <p>I&apos;m well versed in following tools and technologies.</p>
      <div>
        {mySkills.map((skill) => (
          <h4 key={skill}>{skill}</h4>
        ))}
      </div>
    </section>
  );
}
