import Card from "../../UI/Card/Card";
import classes from "./ProjectCard.module.css";
import nopic from "../../assets/nopic.svg";
import React, { useState } from "react";
import EditProject from "./EditProject";
const ProjectCard = ({
  projects,
  project,
  addProject,
  setProjects,
  setAddProject,
}) => {
  const [edit, setEdit] = useState(false);
  const { Title, Images, CustomerURL, id } = project;
  const Poster = Images.length > 0 && URL.createObjectURL(Images[0]);

  const handleDelete = () => {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  return (
    <Card>
      <div className={classes.card}>
        <img className={classes.poster} src={Poster ? Poster : nopic} />
        <h2>{Title}</h2>
        {/*<a href={CustomerURL} target="_blank">
          🔗Customer Website
        </a>*/}
        <button className={classes.overview}>Overview</button>
        <div className={classes.actions}>
          <button
            className={classes.control_button}
            onClick={() => setEdit((prev) => !prev)}
          >
            ⚙️Edit
          </button>
          <button
            className={classes.control_button}
            onClick={() => handleDelete(id)}
          >
            ❌Delete
          </button>
        </div>
        {edit && (
          <EditProject
            setEdit={setEdit}
            setProjects={setProjects}
            projects={projects}
            addProject={addProject}
            setAddProject={setAddProject}
            data={project}
          />
        )}
        {/*<div className={classes.overlay}>
          <button>Overview</button>
        </div>*/}
      </div>
    </Card>
  );
};

export default ProjectCard;
