import Card from "../../UI/Card/Card";
import classes from "./ProjectCard.module.css";
import nopic from "../../assets/nopic.svg";
import React, { useState } from "react";
import EditProject from "./EditProject";
import ProjectOverview from "./ProjectOverview";
const ProjectCard = ({ projects, project, setProjects }) => {
  const [edit, setEdit] = useState(false);
  const [overview, setOverview] = useState(false);
  const [hide, setHide] = useState(true);

  const { Title, Images, id } = project;
  const Poster = Images.length > 0 && URL.createObjectURL(Images[0]);

  const handleDelete = () => {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  return (
    <Card>
      <div className={hide ? classes.card : classes.hide}>
        <img className={classes.poster} src={Poster ? Poster : nopic} />
        <div className={classes.overlay}>
          <h2 className={classes.title}>{Title}</h2>
        </div>
        <button
          onClick={() => setOverview((prev) => !prev)}
          className={classes.overview}
        >
          Show More
        </button>
        <span className={classes.actions}>
          <button
            className={classes.control_button}
            onClick={() => setEdit((prev) => !prev)}
          >
            ⚙️Edit
          </button>
          <button
            className={classes.control_button}
            onClick={() => setHide((prev) => !prev)}
          >
            👁️Hide
          </button>
          <button
            className={classes.control_button}
            onClick={() => handleDelete(id)}
          >
            🗑️Delete
          </button>
        </span>
        {overview && (
          <ProjectOverview setOverview={setOverview} project={project} />
        )}
        {edit && (
          <EditProject
            setEdit={setEdit}
            setProjects={setProjects}
            projects={projects}
            data={project}
          />
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;

// <h2>{Title}</h2>

//        <button
//          onClick={() => setOverview((prev) => !prev)}
//          className={classes.overview}
//        >
//          Overview
//        </button>
