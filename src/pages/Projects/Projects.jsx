import Navbar from "../../components/Navbar/Navbar";
import "./Projects.css";
import { projectsList } from "../../data/projectsList";
import Project from "../../components/Project/Project";

const Projects = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <header>
          <h1 className="page__title">Projects</h1>
        </header>
        <main className="projects">
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
      </div>
    </div>
  );
};

export default Projects;
