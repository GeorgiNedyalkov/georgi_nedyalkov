import Navbar from "../../components/navbar/Navbar";
import "./Projects.css";
import { projectsList } from "../../data/projectsList";

const Projects = () => {
  console.log(projectsList);
  return (
    <>
      <Navbar />
      <main className="projects">
        <h1>Projects</h1>
        <p>Here you can see everythin I have ever coded.</p>

        <div className="projects-wrapper">
          {projectsList.map((project) => {
            const { id, name, description, date, image, url } = project;
            return (
              <div className="project-card" key={id}>
                <h5 className="project-name">{name}</h5>
                <p className="project-date">{date}</p>
                <img className="project-image" src={image} alt="" />
                <p className="project-desc">{description}</p>
                <br />
                <a className="project-link" href="#">
                  {url}
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Projects;
