// work.jsx

import Image from "next/image";

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
    <section>
      <h1>Work</h1>
      <p>
        Check my personal professional projects. If you have any questions feel
        free to contact me for more information.
      </p>
      <div>
        {myProjects.map((project) => (
          <div key={project.name}>
            <Image
              src={project.imageUrl}
              alt="project image"
              width="200"
              height="200"
            />
            <h1>{project.name}</h1>
            <div>
              {project.techUsed.map((tech) => (
                <h4 key={tech}>{tech}</h4>
              ))}
            </div>
            <p>{project.description}</p>
            <div>
              <a href="#">Preview</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
