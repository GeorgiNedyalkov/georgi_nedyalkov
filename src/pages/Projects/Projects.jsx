import Navbar from "../../components/navbar/Navbar";
import "./Projects.css";
import { projectsList } from "../../data/projectsList";
import Project from "../../components/project/Project";

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="projects">
        <h1>Projects</h1>
        <p>Here you can see everythin I have ever coded.</p>
        <ul className="projects__wrapper">
          {projectsList.map((project) => {
            return (
              <li key={project.id}>
                <Project
                  title={project.title}
                  date={project.date}
                  desc={project.desc}
                  image={project.image}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Projects;
