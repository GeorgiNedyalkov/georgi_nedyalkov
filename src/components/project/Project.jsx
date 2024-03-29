import React from "react";
import "./Project.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = ({ title, date, desc, image, github, demo }) => {
  return (
    <div className="project">
      <time className="project__date">{date}</time>
      <h2 className="project__title">{title}</h2>
      <p className="project__description">{desc}</p>
      <div className="project__links">
        <button className="project__btn">
          Demo
          <span className="project__btn-icon">
            <OpenInNewIcon />
          </span>
        </button>
        <button className="project__btn">
          <a className="project__link" href={github}>
            Github
            <GitHubIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
